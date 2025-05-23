#!/bin/bash

# Print the environment mode for debugging purposes
echo "Running in $DJANGO_ENV mode"

# Set default environment to production if not specified
if [ -z "$DJANGO_ENV" ]; then
    DJANGO_ENV="production"
fi

# Perform environment-specific tasks

if [ "$DJANGO_ENV" == "development" ]; then
    # Development environment setup
    echo "Applying database migrations in development mode..."
    uv run python manage.py migrate --noinput

    echo "Starting the Django development server..."
    # Start Django's development server
    uv run python manage.py runserver --noreload 0.0.0.0:9000

else
    # Production environment setup
    echo "Applying database migrations in production mode..."
    uv run python manage.py migrate --noinput

    echo "Collecting static files..."
    uv run python manage.py collectstatic --noinput

    echo "Starting the production server (Gunicorn)..."
    # Start the production server with Gunicorn
    uv run gunicorn configs.wsgi:application --bind 0.0.0.0:9000 --workers=3 --threads=3 #--log-level debug
fi

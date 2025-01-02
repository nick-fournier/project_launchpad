#!/bin/bash

# Print the environment mode for debugging purposes
echo "Running in $DJANGO_ENV mode"

# Set default environment to development if not specified
if [ -z "$DJANGO_ENV" ]; then
    DJANGO_ENV="development"
fi

# Perform environment-specific tasks

if [ "$DJANGO_ENV" == "development" ]; then
    # Development environment setup
    echo "Applying database migrations in development mode..."
    poetry run python manage.py migrate --noinput

    echo "Starting the Django development server..."
    # Start Django's development server
    exec poetry run python manage.py runserver --noreload 0.0.0.0:8000
else
    # Production environment setup
    echo "Applying database migrations in production mode..."
    poetry run python manage.py migrate --noinput

    echo "Collecting static files..."
    poetry run python manage.py collectstatic --noinput

    echo "Starting the production server (Gunicorn)..."
    # Start the production server with Gunicorn
    exec poetry run gunicorn your_project.wsgi:application --bind 0.0.0.0:8000
fi

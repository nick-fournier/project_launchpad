# Base image with Poetry installation
FROM python:3.12-slim AS base

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Install system dependencies including git
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    curl \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Builder stage for dependency installation
FROM base AS builder

WORKDIR /app
COPY uv.lock pyproject.toml ./

# Copy the project files
COPY . /app/

# Pull submodules
RUN git submodule update --init --recursive

# Create a virtual environment and install dependencies
RUN uv sync --frozen

# Runner stage for the application
FROM base AS runner

WORKDIR /app
COPY --from=builder /app/.venv /app/.venv
COPY . /app

# Ensure the entrypoint script is executable
RUN chmod +x ./entrypoint.sh

# Expose port 9000
EXPOSE 9000

# Development stage
FROM runner AS development

WORKDIR /app

ENTRYPOINT ["/app/entrypoint.sh"]

# Production stage with a non-root user
FROM runner AS production

# Set user and group
ARG user=django
ARG group=django
ARG uid=1000
ARG gid=1000

RUN groupadd -g ${gid} ${group} \
    && useradd -u ${uid} -g ${group} -s /bin/sh -m ${user}

# Create a directory for static files
RUN mkdir -p /app/staticfiles

# Give ownership to user and group to static files directory
RUN chmod -R 775 /app/staticfiles
RUN chown -R ${uid}:${gid} /app/staticfiles
RUN chown -R ${uid}:${gid} /app/.venv

# Switch to non-root user and adjust permissions
USER ${uid}:${gid}
WORKDIR /app

# Run the entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]
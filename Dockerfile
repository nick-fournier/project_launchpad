# Base image with Poetry installation
FROM python:3.12-slim AS base

ENV POETRY_HOME=/opt/poetry
ENV PATH=${POETRY_HOME}/bin:${PATH}

# Install system dependencies including git
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    curl \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 - && poetry --version

# Builder stage for dependency installation
FROM base AS builder

WORKDIR /app
COPY poetry.lock pyproject.toml ./

# Copy the project files
COPY . /app/

# Pull submodules
RUN git submodule update --init --recursive

# Create a virtual environment and install dependencies
RUN poetry config virtualenvs.in-project true
RUN poetry install --only main --no-interaction --no-ansi

# Runner stage for the application
FROM base AS runner

WORKDIR /app
COPY --from=builder /app/.venv /app/.venv
COPY . /app

# Ensure the entrypoint script is executable
RUN chmod +x ./entrypoint.sh

# Expose port 8000
EXPOSE 8000

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

# Switch to non-root user and adjust permissions
USER ${uid}:${gid}
WORKDIR /app
ENTRYPOINT ["/app/entrypoint.sh"]

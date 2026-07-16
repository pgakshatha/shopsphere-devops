# 🐳 Docker Documentation

This document explains the Docker architecture, container setup, images, networking, and commands used in the **ShopSphere Production-Ready DevOps Project**.

---

# 🎯 Objective

The primary goal of containerizing the ShopSphere application is to provide a consistent, portable, and reproducible environment for development and deployment.

Docker eliminates dependency conflicts and ensures that the application behaves consistently across different systems.

---

# 🏗️ Docker Architecture

```
                 Docker Host
                      │
     ┌────────────────┼────────────────┐
     ▼                ▼                ▼
Frontend        Backend         PostgreSQL
(Container)    (Container)      (Container)
     │              │                │
     └──────────────┼────────────────┘
                    │
              Docker Network
```

---

# 📦 Docker Containers

The application is composed of the following containers:

| Container | Purpose | Port |
|-----------|---------|------|
| Frontend | React (Vite) Application | 5173 |
| Backend | Express.js REST API | 5000 |
| PostgreSQL | Database Server | 5432 |
| Nginx | Reverse Proxy | 80 |

---

# 🐳 Docker Images

The following Docker images are used in the project:

| Image | Description |
|--------|-------------|
| shopsphere-devops-frontend | React Frontend |
| shopsphere-devops-backend | Express Backend |
| postgres:16 | PostgreSQL Database |
| nginx:latest | Reverse Proxy |

---

# 📄 Dockerfiles

Separate Dockerfiles have been created for:

- Frontend
- Backend

Each Dockerfile:

- Installs project dependencies
- Sets the working directory
- Copies application files
- Exposes the required port
- Starts the application

---

# 🚀 Docker Compose

Docker Compose is used to orchestrate all services.

It manages:

- Frontend
- Backend
- PostgreSQL
- Nginx

The services communicate through a shared Docker network.

---

# ▶️ Common Docker Commands

## Build and Start Containers

```bash
docker compose up --build
```

---

## Start Existing Containers

```bash
docker compose up
```

---

## Stop Containers

```bash
docker compose down
```

---

## Restart Containers

```bash
docker compose restart
```

---

## View Running Containers

```bash
docker ps
```

---

## View Docker Images

```bash
docker images
```

---

## View Container Logs

```bash
docker compose logs
```

---

## Rebuild Images

```bash
docker compose up --build --force-recreate
```

---

# 🌐 Container Communication

The containers communicate through Docker's internal network.

```
Frontend
     │
REST API
     │
Backend
     │
SQL Query
     │
PostgreSQL
```

This allows services to communicate using container names instead of IP addresses.

Example:

```
DB_HOST=postgres
```

---

# 🔍 Validation

Successfully verified:

- Docker images built successfully
- Containers started correctly
- Frontend accessible
- Backend accessible
- PostgreSQL connected
- API responding successfully
- Docker networking functioning correctly

---

# 📸 Screenshots

Include the following screenshots:

- Docker Images
- Running Containers (`docker ps`)
- Docker Compose Output
- Application Running
- PostgreSQL Container

---

# ⚠️ Common Docker Issues

## Container Not Starting

Check logs:

```bash
docker compose logs
```

---

## Port Already in Use

Verify running containers:

```bash
docker ps
```

Stop conflicting containers if necessary.

---

## Database Connection Failed

Verify:

- PostgreSQL container is running
- Environment variables are correct
- Database hostname matches the Docker Compose service name

---

## Rebuild After Changes

```bash
docker compose down

docker compose up --build
```

---

# 🎯 Outcome

At the end of Docker implementation, the ShopSphere application was successfully containerized.

All services can now run together using Docker Compose, providing a consistent environment for local development and preparing the project for cloud deployment.

---

# 📚 Key Learnings

- Docker Images
- Docker Containers
- Dockerfile
- Docker Compose
- Container Networking
- Volume Management
- Port Mapping
- Docker CLI
- Multi-Service Applications

---

# 🚀 Next Step

Deploy the Dockerized ShopSphere application to **AWS EC2** and expose it using **Nginx** as a reverse proxy.
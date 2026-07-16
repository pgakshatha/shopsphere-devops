# 🐳 Docker Documentation

This document explains the Docker architecture, containerization strategy, images, networking, and Docker Compose configuration used in the **ShopSphere Production-Ready DevOps Project**.

---

# 🎯 Objective

The objective of containerizing the ShopSphere application is to provide a consistent, portable, and production-ready environment across development, testing, and deployment.

Docker ensures that the application runs consistently regardless of the underlying operating system or infrastructure.

---

# 🏗️ Docker Architecture

```text
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

The ShopSphere application consists of the following containers:

| Container | Purpose | Port |
|-----------|---------|------|
| Frontend | React (Vite) Application | 5173 |
| Backend | Express.js REST API | 5000 |
| PostgreSQL | Database Server | 5432 |
| Nginx | Reverse Proxy | 80 |

---

# 🐳 Docker Images

### Development Images

| Image | Description |
|--------|-------------|
| shopsphere-frontend | React Frontend |
| shopsphere-backend | Express Backend |
| postgres:16 | PostgreSQL Database |
| nginx:latest | Reverse Proxy |

---

### Production Images

The Jenkins CI pipeline builds and pushes Docker images to Amazon Elastic Container Registry (ECR).

Example image tags:

```
backend:3
backend:latest

frontend:3
frontend:latest
```

---

# 📄 Dockerfiles

Separate Dockerfiles have been created for:

- Frontend
- Backend

Each Dockerfile:

- Uses Node.js base image
- Installs project dependencies
- Sets the working directory
- Copies source code
- Exposes the application port
- Starts the application

---

# 🚀 Docker Compose

Docker Compose is used to orchestrate all application services.

Services include:

- React Frontend
- Express Backend
- PostgreSQL
- Nginx

Docker Compose automatically creates a shared network allowing all services to communicate using service names.

Example:

```
DB_HOST=postgres
```

---

# 🌐 Container Communication

```text
Browser
    │
    ▼
Nginx
    │
 ┌──┴──────────────┐
 ▼                 ▼
Frontend      Backend API
                    │
                    ▼
             PostgreSQL Database
```

---

# ▶️ Docker Commands

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

## View Logs

```bash
docker compose logs
```

---

## Remove Containers

```bash
docker compose down
```

---

## Rebuild Containers

```bash
docker compose up --build --force-recreate
```

---

# ☁️ Docker in AWS

During Day 6 of the DevOps Challenge, Docker images are automatically built using Jenkins and stored in Amazon Elastic Container Registry (ECR).

Deployment workflow:

```text
GitHub

↓

Jenkins

↓

Docker Build

↓

Amazon ECR
```

The application deployment from Amazon ECR to AWS EC2 will be implemented during Day 7.

---

# 🔍 Validation

Successfully verified:

- Docker images built successfully
- Containers started successfully
- Docker networking configured
- PostgreSQL connectivity established
- Backend APIs responding correctly
- Frontend communicating with backend
- Jenkins successfully building Docker images
- Docker images successfully pushed to Amazon ECR

---

# 📸 Recommended Screenshots

Include the following screenshots:

- Docker Images (`docker images`)
- Running Containers (`docker ps`)
- Docker Compose Output
- Frontend Running
- Backend API Response
- PostgreSQL Container
- Amazon ECR Repository
- Jenkins Build Success

---

# ⚠️ Troubleshooting

## Container Not Starting

```bash
docker compose logs
```

---

## Port Already in Use

```bash
docker ps
```

Stop any conflicting containers.

---

## Database Connection Failed

Verify:

- PostgreSQL container is running
- Database credentials
- Docker network
- Service name (`postgres`)

---

## Docker Build Failed

```bash
docker compose build --no-cache
```

---

## Remove Unused Docker Resources

```bash
docker system prune -f
```

---

# 🎯 Outcome

The ShopSphere application has been successfully containerized using Docker and Docker Compose.

The application can now run consistently across different environments, while Jenkins automates Docker image creation and publishes versioned images to Amazon ECR for production deployment.

---

# 📚 Key Learnings

- Docker Images
- Docker Containers
- Dockerfile
- Docker Compose
- Multi-Container Applications
- Docker Networking
- Port Mapping
- Volume Management
- Docker CLI
- Amazon ECR Integration
- Jenkins Docker Automation

---

# 🚀 Next Step

Deploy the Docker images from Amazon Elastic Container Registry (ECR) to AWS EC2 using Docker Compose, followed by GitHub Webhooks, automated deployments, health checks, and rollback implementation.
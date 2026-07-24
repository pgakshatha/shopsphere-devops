# 🐳 Docker Documentation

## 📖 Overview

Docker is the core technology used to containerize the ShopSphere application. Every application component runs inside its own container, ensuring consistent behavior across development, testing, and production environments.

The ShopSphere application uses Docker and Docker Compose to manage multiple services while Jenkins automates image creation and Amazon ECR stores versioned production images.

---

# 🎯 Objectives

The Docker implementation aims to:

- Containerize the frontend and backend applications
- Isolate application services
- Simplify development and deployment
- Maintain consistency across environments
- Enable automated CI/CD
- Support production deployments

---

# 🏗️ Docker Architecture

```text
                    Docker Host
                         │
      ┌──────────────────┼──────────────────┐
      ▼                  ▼                  ▼
 React Frontend     Express Backend     PostgreSQL
   Container          Container          Container
      │                  │                  │
      └──────────────┬───┴──────────────────┘
                     │
             Docker Bridge Network
                     │
                     ▼
            Nginx Reverse Proxy
                     │
                     ▼
                  Browser
```

---

# 📦 Docker Containers

| Container | Purpose | Port |
|-----------|---------|------|
| Frontend | React (Vite) Application | 5173 |
| Backend | Express.js REST API | 5000 |
| PostgreSQL | Database Server | 5432 |
| Nginx | Reverse Proxy | 80 |

---

# 🐳 Docker Images

## Development Images

| Image | Description |
|--------|-------------|
| shopsphere-frontend | React Frontend |
| shopsphere-backend | Express Backend |
| postgres:16 | PostgreSQL |
| nginx:latest | Reverse Proxy |

---

## Production Images

Jenkins automatically builds and pushes versioned Docker images to Amazon Elastic Container Registry (ECR).

Example:

```text
backend-1
backend-2
backend-latest

frontend-1
frontend-2
frontend-latest
```

---

# 📂 Docker Project Structure

```text
shopsphere-devops/

├── backend/
│   └── Dockerfile
│
├── frontend/
│   └── Dockerfile
│
├── nginx/
│   └── default.conf
│
├── database/
│   ├── 01-schema.sql
│   └── 02-seed.sql
│
├── docker-compose.yml
├── docker-compose.prod.yml
└── .dockerignore
```

---

# 📄 Dockerfiles

Separate Dockerfiles are maintained for the frontend and backend.

Each Dockerfile performs the following:

- Uses an official Node.js base image
- Sets the working directory
- Installs dependencies
- Copies application source code
- Exposes the application port
- Starts the application

---

# ⚙️ Docker Compose

Docker Compose orchestrates all services.

Services:

- Frontend
- Backend
- PostgreSQL
- Nginx

Benefits:

- Single command deployment
- Automatic networking
- Volume management
- Environment variable support
- Service discovery

Example:

```env
DB_HOST=postgres
```

The backend connects to PostgreSQL using the Docker service name instead of an IP address.

---

# 🌐 Container Communication

```text
Browser
    │
    ▼
Nginx
    │
 ┌──┴───────────────┐
 ▼                  ▼
Frontend       Backend API
                    │
                    ▼
             PostgreSQL
```

---

# 🛜 Docker Networking

Docker Compose automatically creates a bridge network.

Communication:

| Source | Destination |
|---------|-------------|
| Browser | Nginx |
| Nginx | Frontend |
| Nginx | Backend |
| Backend | PostgreSQL |

Services communicate using Docker service names instead of IP addresses.

---

# 💾 Docker Volumes

Persistent storage is used for PostgreSQL.

Volume Benefits:

- Data persistence
- Easy container replacement
- Database recovery
- Simplified upgrades

---

# 🔧 Environment Variables

Backend:

```env
PORT=5000

DB_HOST=postgres
DB_PORT=5432
DB_NAME=shopsphere
DB_USER=postgres
DB_PASSWORD=postgres
```

Frontend:

```env
VITE_API_URL=http://localhost:5000
```

---

# ▶️ Docker Commands

## Build Images

```bash
docker compose build
```

---

## Start Containers

```bash
docker compose up -d
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

## View Containers

```bash
docker ps
```

---

## View Images

```bash
docker images
```

---

## View Logs

```bash
docker compose logs
```

---

## Rebuild Containers

```bash
docker compose up --build --force-recreate
```

---

## Remove Unused Resources

```bash
docker system prune -f
```

---

# ☁️ Docker with AWS

Production workflow:

```text
Developer
    │
git push
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Pipeline
    │
Build Docker Images
    │
    ▼
Amazon ECR
    │
    ▼
AWS EC2
    │
Docker Compose
    │
    ▼
Application
```

---

# 🔄 Docker Deployment Workflow

```text
Source Code

↓

Docker Build

↓

Docker Images

↓

Amazon ECR

↓

Docker Pull

↓

Docker Compose

↓

Containers Running
```

---

# ❤️ Health Verification

Verify containers

```bash
docker ps
```

Verify backend

```bash
curl http://localhost:5000/health
```

Verify products

```bash
curl http://localhost:5000/api/products
```

---

# 🛠️ Troubleshooting

## Containers Not Running

```bash
docker ps -a
```

---

## View Logs

```bash
docker logs shopsphere-backend

docker logs shopsphere-frontend

docker logs shopsphere-nginx
```

---

## Database Connection Failed

Check:

- PostgreSQL container
- Docker network
- Environment variables
- Database credentials

---

## Rebuild Images

```bash
docker compose build --no-cache
```

---

## Restart Deployment

```bash
docker compose down

docker compose up -d
```

---

# 📸 Recommended Screenshots

Include screenshots of:

- Docker Images (`docker images`)
- Running Containers (`docker ps`)
- Docker Compose Output
- PostgreSQL Container
- Backend Health API
- Products API
- Amazon ECR Repository
- Jenkins Pipeline Success

---

# 📚 Key Learnings

- Docker Images
- Docker Containers
- Dockerfile
- Docker Compose
- Docker Networking
- Multi-Container Applications
- Environment Variables
- Volume Management
- Container Orchestration
- Amazon ECR
- Jenkins Integration
- Production Deployment

---

# 🎯 Outcome

The ShopSphere application has been successfully containerized using Docker and Docker Compose.

The application now follows a production-style containerized architecture where:

- Each service runs in an isolated container.
- Docker Compose manages multi-container deployment.
- Jenkins automatically builds versioned Docker images.
- Images are stored in Amazon ECR.
- Production deployments use Docker Compose on AWS EC2.
- Nginx routes incoming traffic to the application services.

This implementation demonstrates modern Docker practices commonly used in production environments.
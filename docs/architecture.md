# 🏗️ ShopSphere Architecture

This document describes the architecture evolution of the **ShopSphere Production-Ready DevOps Project** throughout the **7-Day DevOps Challenge**.

The objective of this project is to build a production-style e-commerce application while implementing real-world DevOps practices including Docker, AWS, Jenkins CI/CD, and automated deployments.

---

# 📅 Day 01 – Project Initialization

The project started with independent frontend and backend applications running locally.

```text
                   Developer Laptop
                          │
          ┌───────────────┴───────────────┐
          ▼                               ▼
    React Frontend                 Express Backend
   (Vite - Port 5173)            (Port 5000)
```

### Components

- React Frontend
- Express Backend
- REST APIs
- Git
- GitHub

---

# 📅 Day 02 – Docker Containerization

Both applications were containerized using Docker for consistent development and deployment.

```text
                 Docker Host
                      │
      ┌───────────────┴───────────────┐
      ▼                               ▼
Frontend Container             Backend Container
   Port 5173                      Port 5000
```

### Components

- Docker Images
- Docker Containers
- Docker Compose
- Container Networking

---

# 📅 Day 03 – Frontend & Backend Integration

The frontend communicates with the backend through REST APIs.

```text
               Browser
                  │
                  ▼
          React Frontend
                  │
           REST API (HTTP)
                  │
                  ▼
          Express Backend
```

### Components

- React
- Express
- REST APIs
- Fetch API

---

# 📅 Day 04 – PostgreSQL Integration

The backend now retrieves product information from PostgreSQL instead of static JSON data.

```text
                 Browser
                    │
                    ▼
            React Frontend
                    │
             REST API Calls
                    │
                    ▼
            Express Backend
                    │
                    ▼
          PostgreSQL Database
```

### Components

- React
- Express
- PostgreSQL
- SQL Queries

---

# 📅 Day 05 – Production Preparation

The application was prepared for production using Docker Compose, environment variables, and Nginx as a reverse proxy.

```text
                    Browser
                        │
                        ▼
                 Nginx (Port 80)
                        │
        ┌───────────────┴───────────────┐
        ▼                               ▼
 React Frontend                  Express Backend
                                        │
                                        ▼
                               PostgreSQL Database
                                        │
                                        ▼
                             Docker Compose Network
```

### Components

- Nginx Reverse Proxy
- React Frontend
- Express Backend
- PostgreSQL
- Docker Compose
- Environment Variables

---

# 📅 Day 06 – AWS Infrastructure & Continuous Integration

The project was migrated to AWS by provisioning cloud infrastructure and implementing a Jenkins Continuous Integration pipeline.

Docker images are automatically built and pushed to Amazon Elastic Container Registry (ECR).

```text
                    Developer
                        │
                    git push
                        │
                        ▼
                GitHub Repository
                        │
                        ▼
               Jenkins (AWS EC2)
                        │
                Checkout Source Code
                        │
                        ▼
              Build Docker Images
                        │
                        ▼
            Push Images to Amazon ECR
```

### Components

- AWS EC2
- Jenkins
- IAM Role
- Amazon ECR
- Docker
- GitHub
- Docker Image Versioning
- Continuous Integration (CI)

---

# 📅 Day 07 – Automated Deployment (Upcoming)

The final phase completes the Continuous Deployment pipeline.

Jenkins will automatically deploy the latest Docker images from Amazon ECR to the EC2 instance after every successful build.

```text
                    Developer
                        │
                    git push
                        │
                        ▼
                GitHub Repository
                        │
                 GitHub Webhook
                        │
                        ▼
               Jenkins (AWS EC2)
                        │
              Build Docker Images
                        │
                        ▼
            Push Images to Amazon ECR
                        │
                        ▼
           Pull Images from Amazon ECR
                        │
                        ▼
             Docker Compose Deployment
                        │
                        ▼
              Nginx Reverse Proxy
              ┌──────────┴──────────┐
              ▼                     ▼
      React Frontend         Express Backend
                                      │
                                      ▼
                             PostgreSQL Database
```

### Planned Components

- GitHub Webhooks
- Continuous Deployment (CD)
- Docker Compose
- Nginx Reverse Proxy
- Health Checks
- Rollback Strategy
- Automated Deployments

---

# 📊 Architecture Evolution

| Day | Architecture Improvement | Status |
|------|---------------------------|--------|
| Day 1 | Project Initialization | ✅ Completed |
| Day 2 | Docker Containerization | ✅ Completed |
| Day 3 | Frontend & Backend Integration | ✅ Completed |
| Day 4 | PostgreSQL Integration | ✅ Completed |
| Day 5 | Production Preparation (Nginx & Environment Variables) | ✅ Completed |
| Day 6 | AWS Infrastructure, Jenkins CI & Amazon ECR | ✅ Completed |
| Day 7 | Automated Deployment, GitHub Webhooks & Rollback | ⏳ In Progress |

---

# 🎯 Current Architecture Highlights

The current implementation includes:

- ✅ React Frontend
- ✅ Express Backend
- ✅ PostgreSQL Database
- ✅ Docker
- ✅ Docker Compose
- ✅ Nginx Reverse Proxy
- ✅ Environment Variables
- ✅ REST APIs
- ✅ Health Check Endpoint
- ✅ AWS EC2
- ✅ Jenkins
- ✅ IAM Role
- ✅ Amazon ECR
- ✅ Docker Image Versioning
- ✅ Continuous Integration Pipeline

---

# 🚀 Final Production Workflow

```text
                    Developer
                        │
                    git push
                        │
                        ▼
                GitHub Repository
                        │
                 GitHub Webhook
                        │
                        ▼
               Jenkins Pipeline
                        │
          Checkout Source Code
                        │
          Build Docker Images
                        │
          Push Images to Amazon ECR
                        │
          Pull Images on AWS EC2
                        │
         Docker Compose Deployment
                        │
             Health Check (/health)
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▼
     Deployment Success         Rollback Previous Version
```

---

# 📚 DevOps Technologies Used

## Frontend

- React
- Vite
- Tailwind CSS

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL

## DevOps

- Docker
- Docker Compose
- Jenkins
- GitHub
- AWS EC2
- Amazon ECR
- IAM Roles
- Nginx

---

# 🎯 Project Goal

The goal of this project is to demonstrate how a modern production-ready application is built, containerized, integrated with cloud infrastructure, and automated using CI/CD pipelines following industry-standard DevOps practices.

The final implementation includes a complete workflow from source code management to automated Docker image creation, cloud image storage, and production deployment.
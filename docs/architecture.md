# 🏗️ ShopSphere Architecture

## 📖 Overview

ShopSphere is a production-ready e-commerce application built as part of a **7-Day DevOps Challenge**. The objective was to design, containerize, deploy, and automate a modern web application using industry-standard DevOps practices.

Throughout this challenge, the application evolved from a simple local development setup into a production-style deployment on AWS with an automated CI/CD pipeline.

---

# 📅 Day 1 – Project Initialization

The project started by building the frontend and backend independently on the local development machine.

## Architecture

```text
                    Developer Laptop
                           │
          ┌────────────────┴────────────────┐
          ▼                                 ▼
   React Frontend                    Node.js Backend
   (Vite - Port 5173)              (Express - Port 5000)
                                              │
                                              ▼
                                    REST API Endpoints
                                    • GET /
                                    • GET /health
                                    • GET /api/products
```

## Objectives

- Initialize Git Repository
- Create GitHub Repository
- Setup React Application
- Setup Express Backend
- Create REST APIs
- Project Folder Structure

## Technologies

- React
- Vite
- Node.js
- Express
- Git
- GitHub

---

# 📅 Day 2 – Docker Containerization

The application was containerized using Docker to ensure consistency across development and deployment environments.

## Architecture

```text
                   Docker Host
                        │
        ┌───────────────┴───────────────┐
        ▼                               ▼
 Frontend Container             Backend Container
      React                         Express
    Port 5173                     Port 5000
```

## Objectives

- Create Dockerfile for Frontend
- Create Dockerfile for Backend
- Docker Images
- Docker Containers
- Multi-container Development

## Technologies

- Docker
- Docker Compose
- Docker Networking

---

# 📅 Day 3 – Frontend & Backend Integration

The frontend was integrated with the backend using REST APIs.

## Architecture

```text
                  Browser
                      │
                      ▼
              React Frontend
                      │
               HTTP REST APIs
                      │
                      ▼
              Express Backend
```

## Objectives

- Fetch Products API
- API Integration
- Error Handling
- Loading States

## Technologies

- React
- Fetch API
- Express
- REST APIs

---

# 📅 Day 4 – PostgreSQL Integration

Static JSON data was replaced with PostgreSQL.

## Architecture

```text
                    Browser
                        │
                        ▼
                React Frontend
                        │
                REST API Requests
                        │
                        ▼
                Express Backend
                        │
                  SQL Queries
                        │
                        ▼
             PostgreSQL Database
```

## Objectives

- PostgreSQL Database
- Database Schema
- Product Table
- Seed Data
- Database Connection

## Technologies

- PostgreSQL
- pg
- SQL
- Express

---

# 📅 Day 5 – Production Preparation

The application was prepared for production using Docker Compose and Nginx.

## Architecture

```text
                     Browser
                         │
                         ▼
                 Nginx Reverse Proxy
                     Port 80
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
 React Frontend                  Express Backend
                                         │
                                         ▼
                               PostgreSQL Database
```

## Objectives

- Docker Compose
- Environment Variables
- Reverse Proxy
- Production Configuration
- Health Check Endpoint

## Technologies

- Docker Compose
- Nginx
- Environment Variables
- PostgreSQL

---

# 📅 Day 6 – AWS Infrastructure & Continuous Integration

The project was migrated to AWS. Jenkins was introduced for Continuous Integration, and Docker images were pushed to Amazon ECR.

## Architecture

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
          Checkout Source Code
                        │
                        ▼
          Build Docker Images
                        │
                        ▼
         Push Images to Amazon ECR
```

## Objectives

- Launch AWS EC2
- Install Jenkins
- Configure IAM Role
- Create Amazon ECR Repository
- Build Docker Images
- Push Images to ECR

## Technologies

- AWS EC2
- Jenkins
- IAM Role
- Amazon ECR
- Docker
- GitHub

---

# 📅 Day 7 – Continuous Deployment

The final stage automates deployments whenever code is pushed to GitHub.

## Architecture

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
        Checkout Latest Source Code
                        │
                        ▼
          Build Docker Images
                        │
                        ▼
         Push Images to Amazon ECR
                        │
                        ▼
       Pull Latest Images on AWS EC2
                        │
                        ▼
       Docker Compose Production
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

## Objectives

- GitHub Webhooks
- Continuous Deployment
- Automated Docker Pull
- Zero Manual Deployment
- Health Checks
- Rollback Strategy

## Technologies

- GitHub Webhooks
- Jenkins
- Docker Compose
- Amazon ECR
- AWS EC2
- Nginx

---

# 📈 Architecture Evolution

| Day | Architecture | Status |
|------|--------------|--------|
| Day 1 | Local Development | ✅ Completed |
| Day 2 | Docker Containerization | ✅ Completed |
| Day 3 | Frontend-Backend Integration | ✅ Completed |
| Day 4 | PostgreSQL Integration | ✅ Completed |
| Day 5 | Production Setup with Nginx | ✅ Completed |
| Day 6 | AWS + Jenkins + Amazon ECR | ✅ Completed |
| Day 7 | Automated CI/CD Deployment | ✅ Completed |

---

# 🏛️ Final Production Architecture

```text
                               Internet
                                   │
                                   ▼
                           GitHub Repository
                                   │
                            GitHub Webhook
                                   │
                                   ▼
                          Jenkins Pipeline
                                   │
                    Checkout Latest Source
                                   │
                                   ▼
                    Build Docker Images
                                   │
                                   ▼
                     Push Images to Amazon ECR
                                   │
                                   ▼
                            AWS EC2 Server
                                   │
                    Docker Compose Deployment
                                   │
                ┌──────────────────┴──────────────────┐
                ▼                                     ▼
         Nginx Reverse Proxy                   PostgreSQL
                │
        ┌───────┴────────┐
        ▼                ▼
 React Frontend     Express Backend
```

---

# 🔄 CI/CD Workflow

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
Jenkins
    │
Checkout Code
    │
Build Docker Images
    │
Push to Amazon ECR
    │
SSH into EC2
    │
Pull Latest Images
    │
Docker Compose
    │
Health Check
    │
Deployment Successful
```

---

# 🛡️ Rollback Workflow

```text
Deployment Failed
        │
        ▼
Previous Docker Image
        │
        ▼
docker-compose.prod.yml
        │
        ▼
docker compose up -d
        │
        ▼
Application Restored
```

---

# 📂 Project Structure

```text
shopsphere-devops/
│
├── backend/
├── frontend/
├── nginx/
├── database/
├── docs/
│   ├── Architecture.md
│   ├── Deployment.md
│   ├── Docker.md
│   ├── Jenkins.md
│   ├── Troubleshooting.md
│   └── Rollback.md
│
├── docker-compose.yml
├── docker-compose.prod.yml
├── Jenkinsfile
├── README.md
└── .gitignore
```

---

# 🚀 Technologies Used

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
- GitHub Webhooks
- AWS EC2
- Amazon ECR
- IAM Roles
- Nginx
- CI/CD

---

# 🎯 Skills Demonstrated

- Docker Containerization
- Docker Compose
- React Deployment
- Express API Development
- PostgreSQL Integration
- Nginx Reverse Proxy
- AWS EC2
- Amazon ECR
- Jenkins Pipelines
- GitHub Webhooks
- Continuous Integration
- Continuous Deployment
- Health Checks
- Rollback Strategy

---

# 🎯 Project Goal

The objective of ShopSphere is to demonstrate how a modern production-ready application is designed, containerized, deployed, and automated using industry-standard DevOps practices.

The project implements a complete DevOps workflow from source code management to automated Docker image creation, cloud image storage, continuous integration, and production deployment on AWS.
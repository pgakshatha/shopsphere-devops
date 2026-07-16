# 🚀 Deployment Guide

This document explains how to deploy the **ShopSphere** application across development and production environments.

---

# 📋 Prerequisites

Before deploying the application, ensure the following software is installed:

- Git
- Docker
- Docker Compose
- AWS CLI
- Jenkins (for CI)
- Node.js (Optional for local development)

---

# 💻 Local Deployment

## 1. Clone the Repository

```bash
git clone https://github.com/pgakshatha/shopsphere-devops.git

cd shopsphere-devops
```

---

## 2. Configure Environment Variables

### Backend

Create:

```
backend/.env
```

Example:

```env
PORT=5000
NODE_ENV=development

DB_HOST=postgres
DB_PORT=5432
DB_NAME=shopsphere
DB_USER=postgres
DB_PASSWORD=postgres
```

### Frontend

Create:

```
frontend/.env
```

```env
VITE_API_URL=http://localhost:5000
```

---

## 3. Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

## 4. Initialize PostgreSQL

Create the database:

```sql
CREATE DATABASE shopsphere;
```

Run:

```bash
npm run init-db
```

---

## 5. Run Backend

```bash
cd backend
npm run dev
```

Backend URL

```
http://localhost:5000
```

---

## 6. Run Frontend

```bash
cd frontend
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 🐳 Docker Deployment

## Build Containers

```bash
docker compose up --build
```

---

## Stop Containers

```bash
docker compose down
```

---

## View Running Containers

```bash
docker ps
```

---

## Rebuild Containers

```bash
docker compose up --build --force-recreate
```

---

# ☁️ AWS Deployment (Day 06)

The application infrastructure has been prepared for cloud deployment.

Completed:

- AWS EC2 Instance
- IAM Role Configuration
- Amazon ECR Repository
- Docker Installation
- Docker Compose Installation
- AWS CLI Installation
- Jenkins Installation

---

## Build & Push Docker Images

The Jenkins CI pipeline automatically performs:

```text
Checkout Source Code

↓

Build Backend Image

↓

Build Frontend Image

↓

Tag Docker Images

↓

Push Images to Amazon ECR
```

Images stored in Amazon ECR:

```
backend:<BUILD_NUMBER>
backend:latest

frontend:<BUILD_NUMBER>
frontend:latest
```

---

# 📦 Docker Services

| Service | Port |
|----------|------|
| React Frontend | 5173 |
| Express Backend | 5000 |
| PostgreSQL | 5432 |
| Nginx | 80 |

---

# 🔍 Health Check

Backend Health Endpoint

```
GET /health
```

Example:

```json
{
  "status": "UP",
  "service": "ShopSphere Backend",
  "version": "1.0.0"
}
```

---

# 📡 Products API

```
GET /api/products
```

Returns all products stored in PostgreSQL.

---

# 🏗️ Current Deployment Architecture

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
           Build Docker Images
                     │
                     ▼
        Amazon Elastic Container Registry
```

---

# 🚀 Production Deployment (Day 07)

The final phase of the project will implement Continuous Deployment.

Deployment workflow:

```text
GitHub Push

↓

GitHub Webhook

↓

Jenkins

↓

Build Images

↓

Push Images to Amazon ECR

↓

Pull Images on AWS EC2

↓

Docker Compose

↓

Nginx

↓

Application
```

Production features:

- GitHub Webhooks
- Continuous Deployment
- Docker Compose Deployment
- Health Checks
- Rollback Strategy
- Image Versioning

---

# ✅ Deployment Checklist

## Local

- Repository Cloned
- Dependencies Installed
- PostgreSQL Running
- Backend Running
- Frontend Running

## Docker

- Docker Installed
- Docker Compose Installed
- Containers Running

## AWS

- EC2 Created
- IAM Role Attached
- Amazon ECR Created
- Jenkins Installed
- Docker Images Built
- Images Successfully Pushed to Amazon ECR

---

# 📊 Deployment Status

| Environment | Status |
|-------------|--------|
| Local Development | ✅ Completed |
| Docker | ✅ Completed |
| Docker Compose | ✅ Completed |
| Production Preparation | ✅ Completed |
| AWS EC2 Infrastructure | ✅ Completed |
| Jenkins Continuous Integration | ✅ Completed |
| Amazon ECR | ✅ Completed |
| Continuous Deployment | ⏳ Day 07 |

---

# 🎯 Next Step

Implement the Continuous Deployment (CD) pipeline by:

- Configuring GitHub Webhooks
- Pulling Docker images from Amazon ECR
- Deploying the application using Docker Compose
- Performing Health Checks
- Implementing Rollback Strategy

This will complete the end-to-end CI/CD pipeline for the ShopSphere production-ready DevOps project.
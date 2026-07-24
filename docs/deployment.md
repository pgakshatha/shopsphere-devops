# 🚀 Deployment Guide

## 📖 Overview

This guide explains how to deploy the **ShopSphere** application in both development and production environments.

The application is deployed using:

- Docker
- Docker Compose
- AWS EC2
- Amazon ECR
- Jenkins
- GitHub
- Nginx
- PostgreSQL

The production deployment is fully automated using a Jenkins CI/CD pipeline.

---

# 📋 Prerequisites

Install the following software before starting.

| Software | Version |
|----------|----------|
| Git | Latest |
| Docker | Latest |
| Docker Compose | Latest |
| Node.js | 20+ |
| AWS CLI | Latest |
| Jenkins | Latest |

---

# 💻 Local Deployment

## Clone Repository

```bash
git clone https://github.com/pgakshatha/shopsphere-devops.git

cd shopsphere-devops
```

---

## Backend Environment

Create

```
backend/.env
```

```env
PORT=5000

DB_HOST=postgres
DB_PORT=5432
DB_NAME=shopsphere
DB_USER=postgres
DB_PASSWORD=postgres
```

---

## Frontend Environment

Create

```
frontend/.env
```

```env
VITE_API_URL=http://localhost:5000
```

---

## Install Dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

---

## Run Backend

```bash
npm run dev
```

Runs on

```
http://localhost:5000
```

---

## Run Frontend

```bash
npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 🐳 Docker Deployment

Build images

```bash
docker compose build
```

Start containers

```bash
docker compose up -d
```

Stop containers

```bash
docker compose down
```

View running containers

```bash
docker ps
```

Rebuild

```bash
docker compose up --build --force-recreate
```

---

# ☁️ AWS Infrastructure

Production deployment uses

- AWS EC2
- IAM Role
- Amazon ECR
- Docker
- Docker Compose
- Jenkins
- Nginx

---

## Configure AWS CLI

```bash
aws configure
```

Verify

```bash
aws sts get-caller-identity
```

---

# 📦 Amazon ECR

Login

```bash
aws ecr get-login-password --region ap-south-1 \
| docker login \
--username AWS \
--password-stdin <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com
```

Pull Images

```bash
docker compose -f docker-compose.prod.yml pull
```

---

# ⚙️ Jenkins CI/CD Pipeline

The Jenkins pipeline performs the following steps automatically.

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

↓

Deploy to EC2

↓

Health Check
```

---

# 🔗 GitHub Webhook

Configure

```
Repository

↓

Settings

↓

Webhooks

↓

Add Webhook
```

Payload URL

```
http://<EC2_PUBLIC_IP>:8080/github-webhook/
```

Content Type

```
application/json
```

Events

```
Push Events
```

---

# 🚀 Production Deployment

Deploy

```bash
docker compose -f docker-compose.prod.yml down

docker compose -f docker-compose.prod.yml pull

docker compose -f docker-compose.prod.yml up -d
```

Verify

```bash
docker ps
```

---

# 🌐 Application URLs

| Service | URL |
|----------|-----|
| Frontend | http://EC2_PUBLIC_IP |
| Backend Health | http://EC2_PUBLIC_IP/health |
| Products API | http://EC2_PUBLIC_IP/api/products |

---

# ❤️ Health Check

```bash
curl http://localhost:5000/health
```

Expected

```json
{
  "status":"UP",
  "service":"ShopSphere Backend",
  "version":"1.0.0"
}
```

---

# 📦 Products API

```bash
curl http://localhost:5000/api/products
```

Returns

- Product Name
- Description
- Price
- Image

---

# 🏗️ Deployment Architecture

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
                         ▼
               Build Docker Images
                         │
                         ▼
             Push Images to Amazon ECR
                         │
                         ▼
                  AWS EC2 Instance
                         │
              Docker Compose Deploy
                         │
             Nginx Reverse Proxy
               ┌────────┴────────┐
               ▼                 ▼
        React Frontend    Express Backend
                                  │
                                  ▼
                          PostgreSQL Database
```

---

# 🔄 Rollback

List images

```bash
docker images
```

Deploy previous version

```bash
docker pull backend:previous

docker pull frontend:previous
```

Update

```
docker-compose.prod.yml
```

Restart

```bash
docker compose down

docker compose up -d
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

## Restart Containers

```bash
docker compose restart
```

---

## Check Health

```bash
curl http://localhost:5000/health
```

---

# ✅ Deployment Checklist

## Local

- Repository cloned
- Dependencies installed
- Frontend running
- Backend running

## Docker

- Docker installed
- Containers running

## AWS

- EC2 created
- IAM Role attached
- Amazon ECR configured
- Jenkins configured
- Docker images pushed
- Containers deployed
- Health checks passed

---

# 🎯 Deployment Summary

The ShopSphere application follows a modern deployment workflow:

1. Developer pushes code to GitHub.
2. Jenkins automatically builds Docker images.
3. Images are pushed to Amazon ECR.
4. EC2 pulls the latest images.
5. Docker Compose deploys the updated application.
6. Nginx routes incoming traffic.
7. Health checks verify the deployment.
8. If required, a previous image version can be redeployed.

This workflow demonstrates a production-style CI/CD process using AWS, Docker, Jenkins, GitHub, and Amazon ECR.
# 🚀 Deployment Guide

This document explains how to deploy the **ShopSphere** application in different environments.

---

# 📋 Prerequisites

Before deploying the application, ensure the following software is installed:

- Git
- Docker
- Docker Compose
- Node.js (Optional for local development)
- PostgreSQL (Optional if not using Docker)

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

## 4. Start PostgreSQL

If using a local PostgreSQL installation, ensure the database service is running.

Create the database:

```sql
CREATE DATABASE shopsphere;
```

Run the initialization script:

```bash
npm run init-db
```

---

## 5. Start the Backend

```bash
cd backend

npm run dev
```

Backend URL

```
http://localhost:5000
```

---

## 6. Start the Frontend

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

The recommended way to run the application is using Docker Compose.

## Build and Start Containers

```bash
docker compose up --build
```

---

## View Running Containers

```bash
docker ps
```

---

## Stop Containers

```bash
docker compose down
```

---

## Rebuild Containers

```bash
docker compose up --build --force-recreate
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

Verify that the backend is running correctly.

```
GET http://localhost:5000/health
```

Expected Response

```json
{
    "status": "UP",
    "service": "ShopSphere Backend",
    "version": "1.0.0"
}
```

---

# 📡 Verify API

```
GET http://localhost:5000/api/products
```

The API should return product data from PostgreSQL.

---

# 🏗️ Current Deployment Architecture

```
Browser
    │
    ▼
Nginx
    │
 ┌──┴───────────────┐
 ▼                  ▼
React          Express API
                     │
                     ▼
              PostgreSQL
```

---

# ☁️ Future Deployment

The following production improvements are planned as part of the DevOps challenge:

- AWS EC2 Deployment
- Jenkins CI/CD Pipeline
- HTTPS using Nginx
- Prometheus Monitoring
- Grafana Dashboard
- Automated Backup Strategy
- Centralized Logging

---

# ✅ Deployment Checklist

- Git Repository Cloned
- Environment Variables Configured
- Dependencies Installed
- PostgreSQL Running
- Docker Containers Running
- Backend Health Check Passed
- Frontend Accessible
- REST API Responding Successfully

---

# 🎯 Deployment Status

| Environment | Status |
|-------------|--------|
| Local Development | ✅ Completed |
| Docker | ✅ Completed |
| Docker Compose | ✅ Completed |
| Production Preparation | ✅ Completed |
| AWS EC2 | ⏳ Planned |
| Jenkins CI/CD | ⏳ Planned |

---

# 🚀 Next Step

Proceed to **Day 06 – AWS EC2 Deployment**, where the complete ShopSphere application will be deployed to a cloud server using Docker, Docker Compose, and Nginx.
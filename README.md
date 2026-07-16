# 🛒 ShopSphere

# Production-Ready DevOps Project

A modern production-style e-commerce application built to demonstrate real-world DevOps practices using **React, Node.js, PostgreSQL, Docker, Nginx, AWS, and Jenkins**.

This repository documents my journey of building, documenting, containerizing, and deploying a production-ready application as part of a **7-Day DevOps Challenge**.

---

# 📌 Project Overview

ShopSphere is a full-stack e-commerce application designed to simulate a real-world production environment.

The objective of this project is not only to develop an application but also to implement DevOps best practices including:

- Docker Containerization
- Database Integration
- Environment Variable Management
- Reverse Proxy Configuration
- CI/CD Pipeline
- Cloud Deployment
- Production Documentation

---

# 🚀 Features

### Frontend

- Responsive React UI
- Professional Landing Page
- Product Listing
- Product Search
- Loading Spinner
- Empty State
- Responsive Product Cards

### Backend

- Express REST API
- Health Check Endpoint
- Product API
- PostgreSQL Integration

### Database

- PostgreSQL Database
- Products Table
- Seed Data

### DevOps

- Docker
- Docker Compose
- Environment Variables
- Nginx Reverse Proxy
- Git & GitHub

---

# 🛠️ Technology Stack

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
- Nginx
- Git
- GitHub

## Upcoming

- AWS EC2
- Jenkins
- HTTPS
- Monitoring (Prometheus & Grafana)

---

# 📂 Project Structure

```
shopsphere-devops/
│
├── assets/
│   └── screenshots/
│
├── backend/
│
├── database/
│
├── docker/
│
├── docs/
│
├── frontend/
│
├── jenkins/
│
├── nginx/
│
├── scripts/
│
├── docker-compose.yml
│
├── README.md
│
└── .gitignore
```

---

# 🏗️ Current Architecture

```
                     Browser
                         │
                         ▼
                     Nginx
                         │
        ┌────────────────┴────────────────┐
        ▼                                 ▼
 React Frontend                    Express Backend
                                         │
                                         ▼
                                 PostgreSQL Database
                                         │
                                         ▼
                                Docker Compose
```

---

# 📸 Application Screenshots

## 🏠 Home Page

> assets/screenshots/home.png

---

## 🔍 Product Search

> assets/screenshots/search.png

---

## 🐳 Docker Containers

> assets/screenshots/docker.png

---

## 🗄️ PostgreSQL Database

> assets/screenshots/postgres.png

---

## 📡 REST API Response

> assets/screenshots/api.png

---

## 📂 Project Structure

> assets/screenshots/structure.png

---

# 📡 REST API Endpoints

## Home

```
GET /
```

Response

```
Welcome to ShopSphere API
```

---

## Health Check

```
GET /health
```

Response

```json
{
    "status": "UP",
    "service": "ShopSphere Backend",
    "version": "1.0.0"
}
```

---

## Products

```
GET /api/products
```

Returns all products stored in PostgreSQL.

---

# ⚙️ Local Setup

## Clone Repository

```bash
git clone https://github.com/pgakshatha/shopsphere-devops.git

cd shopsphere-devops
```

---

## Start using Docker

```bash
docker compose up --build
```

---

## Frontend

```
http://localhost:5173
```

---

## Backend

```
http://localhost:5000
```

---

## API

```
http://localhost:5000/api/products
```

---

# 🐳 Docker Services

| Service | Port |
|----------|------|
| React Frontend | 5173 |
| Express Backend | 5000 |
| PostgreSQL | 5432 |
| Nginx | 80 |

---

# 📅 7-Day DevOps Challenge Progress

| Day | Task | Status |
|------|-------------------------------|---------|
| Day 1 | Project Setup & Architecture | ✅ Completed |
| Day 2 | Docker & Docker Compose | ✅ Completed |
| Day 3 | Frontend & Backend Integration | ✅ Completed |
| Day 4 | PostgreSQL Integration | ✅ Completed |
| Day 5 | Production Preparation (Environment Variables, Nginx, Health Checks) | ✅ Completed |
| Day 6 | AWS EC2 Deployment | ⏳ Upcoming |
| Day 7 | Jenkins CI/CD Pipeline | ⏳ Upcoming |

---

# 🎯 DevOps Skills Demonstrated

- Git & GitHub Workflow
- Docker Image Creation
- Docker Compose
- PostgreSQL Integration
- REST API Development
- Environment Variable Management
- Reverse Proxy Configuration using Nginx
- Production Project Structure
- Application Documentation

---

# 🚀 Future Improvements

- Deploy on AWS EC2
- Configure Jenkins CI/CD
- Enable HTTPS using Nginx
- Add Prometheus Monitoring
- Add Grafana Dashboard
- Configure Automated Backups
- Add Centralized Logging

---

# 📚 Documentation

Detailed implementation for each day is available inside the **docs/** folder.

- Day-01-Project-Setup.md
- Day-02-Dockerization.md
- Day-03-Frontend-Backend-Integration.md
- Day-04-PostgreSQL-Integration.md
- Day-05-Production-Preparation.md

---

# 👩‍💻 Author

**Akshatha P G**

DevOps Engineer

GitHub:
https://github.com/pgakshatha

Project Repository:
https://github.com/pgakshatha/shopsphere-devops

---

⭐ If you found this project useful, consider giving the repository a Star.
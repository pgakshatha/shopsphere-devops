# 🏗️ ShopSphere Architecture

This document describes the architecture evolution of the **ShopSphere Production-Ready DevOps Project** throughout the 7-Day DevOps Challenge.

---

# 📅 Day 01 – Initial Architecture

The project started with independent frontend and backend applications running locally.

```
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
- Git & GitHub

---

# 📅 Day 02 – Docker Architecture

Both applications were containerized using Docker.

```
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
- Docker Networking
- Docker Compose

---

# 📅 Day 03 – Frontend & Backend Integration

The frontend communicates with the backend through REST APIs.

```
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
- Fetch API
- REST API

---

# 📅 Day 04 – PostgreSQL Integration

The backend retrieves product information from PostgreSQL instead of static JSON.

```
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

The application was prepared for production using Nginx, environment variables, and Docker Compose.

```
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

# 🚀 Future Production Architecture

The final architecture after completing the 7-Day DevOps Challenge will look like this:

```
                        GitHub Repository
                               │
                               ▼
                        Jenkins Pipeline
                               │
                      Build Docker Images
                               │
                               ▼
                         AWS EC2 Instance
                               │
                               ▼
                    Nginx Reverse Proxy
                               │
                ┌──────────────┴──────────────┐
                ▼                             ▼
        React Frontend                Express Backend
                                              │
                                              ▼
                                     PostgreSQL Database
```

### Future Components

- GitHub
- Jenkins
- Docker
- AWS EC2
- Nginx
- PostgreSQL
- HTTPS
- Monitoring
- Automated Deployment

---

# 📊 Architecture Evolution

| Day | Architecture Improvement |
|------|--------------------------|
| Day 1 | Project Initialization |
| Day 2 | Docker Containerization |
| Day 3 | Frontend & Backend Integration |
| Day 4 | PostgreSQL Integration |
| Day 5 | Production Preparation (Nginx & Environment Variables) |
| Day 6 | AWS EC2 Deployment *(Upcoming)* |
| Day 7 | Jenkins CI/CD *(Upcoming)* |

---

# 🎯 Architecture Highlights

Current implementation includes:

- ✅ React Frontend
- ✅ Express Backend
- ✅ PostgreSQL Database
- ✅ Docker
- ✅ Docker Compose
- ✅ Nginx Reverse Proxy
- ✅ Environment Variables
- ✅ REST APIs
- ✅ Health Check Endpoint

---

# 🚀 Next Step

The next phase of the project is deploying the complete architecture to **AWS EC2** and implementing a **Jenkins CI/CD Pipeline** for automated deployments.
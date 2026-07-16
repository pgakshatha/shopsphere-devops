# 📅 Day 02 – Dockerization

## 🎯 Goal

The objective of Day 2 was to containerize the ShopSphere application to create a consistent development environment and eliminate the classic **"Works on My Machine"** problem.

By packaging both the frontend and backend into Docker containers, the application becomes portable, reproducible, and easier to deploy across different environments.

---

# 📌 Problem Statement

Running applications directly on the host machine often leads to dependency conflicts, inconsistent environments, and deployment challenges.

To overcome these issues, both the React frontend and Express backend needed to be containerized using Docker and orchestrated in a standardized environment.

---

# 🛠️ Tasks Completed

## Backend Containerization

- Created a production-ready Dockerfile for the Express.js backend
- Installed project dependencies inside the container
- Configured the working directory
- Exposed port **5000**
- Verified backend startup inside Docker

---

## Frontend Containerization

- Created a Dockerfile for the React (Vite) frontend
- Installed frontend dependencies
- Configured Vite to run inside the container
- Exposed port **5173**
- Verified frontend accessibility through Docker

---

## Docker Optimization

- Created **.dockerignore** files for both frontend and backend
- Excluded unnecessary files such as:

  - node_modules
  - logs
  - build artifacts

- Reduced Docker image size and improved build performance

---

## Docker Image Creation

Successfully built Docker images for:

- ShopSphere Frontend
- ShopSphere Backend

Verified image creation using Docker CLI.

---

## Container Execution

Started both application containers and verified:

- Frontend container running successfully
- Backend container running successfully
- REST API accessible
- Frontend communicating with backend

---

# 💻 Technologies Used

## Containerization

- Docker
- Docker CLI

## Frontend

- React
- Vite

## Backend

- Node.js
- Express.js

---

# 🖥️ Commands Used

Build Images

```bash
docker build
```

Run Containers

```bash
docker run
```

View Running Containers

```bash
docker ps
```

List Images

```bash
docker images
```

---

# ✅ Validation

Successfully verified:

- Docker images created successfully
- Frontend container accessible
- Backend container accessible
- API responding correctly
- Container networking functioning as expected

---

# 📸 Screenshots

- Docker Images
- Running Containers (`docker ps`)
- Frontend running inside Docker
- Backend API response

---

# 🎯 Outcome

At the end of Day 2, both the frontend and backend applications were successfully containerized using Docker.

The application could now run consistently across different systems without relying on local machine configurations, making it ready for Docker Compose orchestration and future cloud deployment.

---

# 📚 Key Learnings

- Docker Images
- Docker Containers
- Dockerfile
- .dockerignore
- Port Mapping
- Container Networking
- Image Optimization
- Container Lifecycle

---

# 🚀 Next Step

**Day 03 – Frontend & Backend Integration**

Connect the React frontend with the Express.js backend, build a professional user interface, and consume backend REST APIs to display dynamic product data.
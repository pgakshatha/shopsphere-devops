# 📅 Day 01 – Project Setup

## 🎯 Goal

The objective of Day 1 was to lay the foundation for the **ShopSphere Production-Ready DevOps Project** by creating the project structure, initializing the frontend and backend applications, and preparing the repository for future DevOps implementation.

---

# 📌 Problem Statement

Before implementing Docker, PostgreSQL, AWS, or Jenkins, a clean and scalable project structure was required. The application needed separate frontend and backend services with proper version control and a well-organized repository.

---

# 🛠️ Tasks Completed

## Repository Setup

- Created a new GitHub repository named **shopsphere-devops**
- Initialized the Git repository
- Configured the main branch
- Established the initial project structure

---

## Frontend Development

- Initialized the frontend using **React + Vite**
- Installed project dependencies
- Verified successful application startup
- Confirmed the application was accessible in the browser

---

## Backend Development

- Created an Express.js backend
- Configured the project structure
- Installed required npm packages
- Created the initial Express server
- Configured CORS support
- Added JSON request handling

---

## REST API Development

Implemented the initial API endpoints.

### Home Endpoint

```
GET /
```

Returns:

```
Welcome to ShopSphere API
```

---

### Health Check Endpoint

```
GET /health
```

Returns the application status.

---

## Project Structure

```
shopsphere-devops/

├── frontend/
├── backend/
├── database/
├── docs/
├── docker/
├── nginx/
├── jenkins/
├── scripts/
└── README.md
```

---

# 💻 Technologies Used

### Frontend

- React
- Vite

### Backend

- Node.js
- Express.js

### Version Control

- Git
- GitHub

---

# ✅ Validation

Successfully verified:

- Frontend running successfully
- Backend running successfully
- Health API responding correctly
- Git repository initialized
- Initial project committed to GitHub

---

# 📸 Screenshots

- GitHub Repository
- Project Folder Structure
- React Application
- Backend Health API

---

# 🎯 Outcome

At the end of Day 1, the project had a clean and scalable architecture with independent frontend and backend applications.

The repository was ready for Docker containerization and future production deployment.

---

# 📚 Key Learnings

- Creating a scalable project structure
- Initializing React applications using Vite
- Building an Express.js REST API
- Implementing Health Check endpoints
- Managing source code with Git and GitHub
- Organizing a project for future DevOps implementation

---

# 🚀 Next Step

**Day 02 – Dockerization**

Containerize the frontend and backend applications using Docker and Docker Compose to create a consistent development environment.
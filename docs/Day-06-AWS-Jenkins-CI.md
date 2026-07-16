# 📅 Day 06 – AWS Infrastructure & Jenkins Continuous Integration

## 🎯 Objective

Build a production-ready cloud infrastructure and implement a Continuous Integration (CI) pipeline using Jenkins to automatically build Docker images and push them to Amazon Elastic Container Registry (ECR).

---

# ✅ Tasks Completed

## AWS Infrastructure

- Created an AWS EC2 instance
- Configured Security Groups
- Connected to EC2 using SSH
- Attached an IAM Role to the EC2 instance
- Verified IAM Role permissions

---

## Amazon ECR

- Created an Amazon Elastic Container Registry (ECR) repository
- Logged in to Amazon ECR using the AWS CLI
- Verified ECR authentication using the EC2 IAM Role

---

## Jenkins Installation

- Installed Java
- Installed Jenkins
- Started the Jenkins service
- Configured Jenkins
- Installed required plugins
- Created the Jenkins administrator account

---

## Docker Configuration

- Installed Docker
- Installed Docker Compose
- Configured Jenkins to access Docker
- Verified Docker installation

---

## Continuous Integration Pipeline

Created a Jenkins Pipeline to:

- Checkout source code from GitHub
- Verify Docker, Git, and AWS CLI
- Authenticate with Amazon ECR
- Build Backend Docker image
- Build Frontend Docker image
- Tag Docker images
- Push Docker images to Amazon ECR

---

# 🏗️ Architecture

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

---

# 🛠️ Technology Used

## Cloud

- AWS EC2
- Amazon ECR
- IAM Role

## CI/CD

- Jenkins
- GitHub

## Containers

- Docker
- Docker Compose

---

# 📦 Docker Images

Backend

```
backend:<BUILD_NUMBER>
backend:latest
```

Frontend

```
frontend:<BUILD_NUMBER>
frontend:latest
```

Example:

```
backend-3
backend-latest

frontend-3
frontend-latest
```

---

# 📂 Jenkins Pipeline Stages

1. Checkout Source Code

2. Verify Environment

3. Login to Amazon ECR

4. Build Backend Image

5. Build Frontend Image

6. Tag Docker Images

7. Push Backend Image

8. Push Frontend Image

---

# 📊 Outcome

Successfully implemented a Jenkins Continuous Integration pipeline that automatically:

- Retrieves the latest source code from GitHub
- Builds Docker images for both frontend and backend
- Tags images using the Jenkins build number
- Pushes versioned Docker images to Amazon Elastic Container Registry (ECR)

This establishes the CI portion of the deployment pipeline and prepares the application for automated deployment.

---

# 📚 Key Learnings

- AWS EC2 setup
- IAM Roles
- Amazon ECR
- Jenkins Pipeline
- Docker Image Versioning
- Continuous Integration
- GitHub Integration
- Docker Build Automation

---

# 🚀 Next Step

Day 07 will focus on implementing Continuous Deployment (CD) by:

- Configuring GitHub Webhooks
- Deploying Docker images from Amazon ECR to AWS EC2
- Running the application using Docker Compose
- Performing automated health checks
- Implementing rollback for failed deployments
- Completing the end-to-end CI/CD pipeline

---

# ✅ Day 06 Summary

| Task | Status |
|------|--------|
| AWS EC2 Setup | ✅ Completed |
| IAM Role Configuration | ✅ Completed |
| Amazon ECR | ✅ Completed |
| Docker Installation | ✅ Completed |
| Docker Compose | ✅ Completed |
| Jenkins Installation | ✅ Completed |
| GitHub Integration | ✅ Completed |
| Docker Image Build | ✅ Completed |
| Push Images to Amazon ECR | ✅ Completed |
| Continuous Integration Pipeline | ✅ Completed |
# 🛠️ Troubleshooting Guide

This document contains common issues encountered while building and deploying the **ShopSphere Production-Ready DevOps Project** along with their causes and solutions.

---

# 1️⃣ PostgreSQL Connection Error

## Problem

```text
Error: getaddrinfo ENOTFOUND postgres
```

## Cause

The backend was running outside the Docker network while trying to connect to the PostgreSQL container using the hostname `postgres`.

## Solution

- Verify the PostgreSQL container is running.
- Check the Docker Compose service name.
- Use the correct database host based on the execution environment.
- Restart Docker Compose.

```bash
docker compose down
docker compose up --build
```

---

# 2️⃣ Database Initialization Failed

## Problem

```bash
npm run init-db
```

failed.

## Cause

The PostgreSQL service was not ready or the database connection details were incorrect.

## Solution

- Start PostgreSQL.
- Verify database credentials.
- Wait for PostgreSQL initialization.
- Run the script again.

---

# 3️⃣ Docker Container Not Starting

## Problem

Containers exited immediately after startup.

## Cause

- Incorrect Dockerfile
- Missing dependencies
- Invalid environment variables
- Application startup failure

## Solution

```bash
docker compose logs
```

or

```bash
docker logs <container-name>
```

Fix the reported issue and rebuild.

```bash
docker compose up --build
```

---

# 4️⃣ Port Already in Use

## Problem

```text
Bind for 0.0.0.0:5000 failed
```

## Cause

Another application is already using the required port.

## Solution

```bash
docker ps
```

Stop the conflicting container.

```bash
docker stop <container-id>
```

---

# 5️⃣ Frontend Unable to Load Products

## Problem

No products displayed in the React application.

## Cause

- Backend not running
- Incorrect API URL
- Database connection failed

## Solution

Verify:

```
http://localhost:5000/api/products
```

Check the browser Developer Tools (Network tab).

---

# 6️⃣ Health Check Failed

## Problem

```
GET /health
```

returned an error.

## Cause

Backend service not running.

## Solution

Restart the backend.

```bash
npm run dev
```

or

```bash
docker compose up
```

Verify:

```
http://localhost:5000/health
```

---

# 7️⃣ Docker Build Failed

## Problem

Docker image creation failed.

## Cause

- Dockerfile error
- Missing dependencies
- Invalid build context

## Solution

```bash
docker compose build --no-cache
```

Restart containers.

```bash
docker compose up --build
```

---

# 8️⃣ Changes Not Reflected

## Problem

Application changes are not visible.

## Cause

- Browser cache
- Docker cache

## Solution

Hard refresh the browser.

```
Ctrl + Shift + R
```

Rebuild Docker images.

```bash
docker compose down
docker compose up --build
```

---

# 9️⃣ Git Push Failed

## Problem

Unable to push code to GitHub.

## Cause

- Authentication failure
- Wrong branch
- Repository permission issue

## Solution

Verify:

```bash
git status
git branch
git remote -v
```

Push again.

```bash
git push origin main
```

---

# 🔟 Jenkins Pipeline Failed

## Problem

The Jenkins build failed.

## Cause

Possible reasons:

- Docker daemon unavailable
- Git checkout failed
- AWS CLI not installed
- Incorrect Jenkinsfile

## Solution

Check the Jenkins Console Output.

Verify:

- Docker is installed
- Jenkins has Docker permissions
- AWS CLI is configured
- GitHub repository is accessible

Restart Jenkins if required.

```bash
sudo systemctl restart jenkins
```

---

# 1️⃣1️⃣ Amazon ECR Login Failed

## Problem

```text
no basic auth credentials
```

or

```text
AccessDeniedException
```

## Cause

- EC2 IAM Role not attached
- Missing ECR permissions
- AWS CLI configuration issue

## Solution

Verify the IAM Role.

Check identity.

```bash
aws sts get-caller-identity
```

Login again.

```bash
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com
```

---

# 1️⃣2️⃣ Docker Push to Amazon ECR Failed

## Problem

Docker images were not pushed to Amazon ECR.

## Cause

- Authentication expired
- Repository not found
- Incorrect image tag

## Solution

Login again.

```bash
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com
```

Verify repositories.

```bash
aws ecr describe-repositories
```

Verify image tags.

```bash
docker images
```

---

# 🔍 Useful Debugging Commands

## Running Containers

```bash
docker ps
```

---

## Docker Images

```bash
docker images
```

---

## Docker Logs

```bash
docker compose logs
```

---

## Jenkins Status

```bash
sudo systemctl status jenkins
```

---

## Docker Status

```bash
sudo systemctl status docker
```

---

## AWS Identity

```bash
aws sts get-caller-identity
```

---

## Verify ECR Repositories

```bash
aws ecr describe-repositories
```

---

## Backend Health Check

```
http://localhost:5000/health
```

---

## Products API

```
http://localhost:5000/api/products
```

---

# ✅ Best Practices

- Use IAM Roles instead of AWS Access Keys.
- Store configuration using environment variables.
- Use Docker Compose for multi-container applications.
- Push versioned Docker images to Amazon ECR.
- Verify health endpoints after every deployment.
- Review Jenkins Console Output before troubleshooting.
- Check Docker logs before rebuilding containers.
- Keep documentation updated with resolved issues.

---

# 🎯 Outcome

This troubleshooting guide documents the most common development, Docker, AWS, Jenkins, and Amazon ECR issues encountered while building the ShopSphere project.

Maintaining a structured troubleshooting guide helps reduce debugging time, improves deployment reliability, and demonstrates a production-focused DevOps workflow.
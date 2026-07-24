# 🛠️ Troubleshooting Guide

## 📖 Overview

This guide documents the most common issues encountered while developing, containerizing, deploying, and maintaining the **ShopSphere Production-Ready DevOps Project**.

It provides the symptoms, possible causes, and recommended solutions for each issue.

---

# 1. PostgreSQL Connection Error

## Error

```text
Error: getaddrinfo ENOTFOUND postgres
```

## Cause

The backend could not resolve the PostgreSQL hostname.

Possible reasons:

- PostgreSQL container is not running
- Incorrect `DB_HOST`
- Backend running outside Docker
- Docker network issue

## Solution

Verify PostgreSQL container.

```bash
docker ps
```

Verify Docker Compose.

```bash
docker compose ps
```

Restart containers.

```bash
docker compose down

docker compose up -d
```

---

# 2. Database Initialization Failed

## Error

```bash
npm run init-db
```

failed.

## Cause

- Database not created
- PostgreSQL not ready
- Invalid credentials

## Solution

Check PostgreSQL.

```bash
docker logs shopsphere-postgres
```

Verify environment variables.

```env
DB_HOST=postgres
DB_PORT=5432
DB_NAME=shopsphere
DB_USER=postgres
DB_PASSWORD=postgres
```

Run again.

```bash
npm run init-db
```

---

# 3. Products Table Not Found

## Error

```text
relation "products" does not exist
```

## Cause

Database schema was not initialized.

## Solution

Run schema scripts.

```bash
docker exec -it shopsphere-postgres psql -U postgres
```

Verify

```sql
\dt
```

Expected

```text
products
```

---

# 4. Docker Container Not Starting

## Symptoms

Container remains in

```text
Created
```

or

```text
Exited
```

## Cause

- Dockerfile issue
- Missing dependencies
- Invalid command
- Missing environment variables

## Solution

Check logs.

```bash
docker logs shopsphere-backend

docker logs shopsphere-frontend
```

Inspect status.

```bash
docker ps -a
```

Restart.

```bash
docker compose up -d
```

---

# 5. Nginx Returns 502 Bad Gateway

## Error

```text
502 Bad Gateway
```

## Cause

- Backend container stopped
- Frontend container stopped
- Incorrect upstream configuration
- Docker networking issue

## Solution

Verify containers.

```bash
docker ps
```

Check Nginx logs.

```bash
docker logs shopsphere-nginx
```

Restart deployment.

```bash
docker compose restart
```

---

# 6. Frontend Unable to Load Products

## Symptoms

No products displayed.

## Cause

- Backend unavailable
- Invalid API URL
- Database unavailable

## Solution

Verify backend.

```bash
curl http://localhost:5000/api/products
```

Inspect browser Developer Tools.

Check

- Network tab
- Console tab

---

# 7. Health Check Failed

## Error

```text
GET /health
```

returns an error.

## Cause

Backend service unavailable.

## Solution

Restart backend.

```bash
docker compose restart backend
```

Verify.

```bash
curl http://localhost:5000/health
```

---

# 8. Docker Build Failed

## Cause

- Dockerfile error
- Dependency issue
- Invalid build context

## Solution

Rebuild.

```bash
docker compose build --no-cache
```

Restart.

```bash
docker compose up -d
```

---

# 9. Port Already in Use

## Error

```text
Bind for 0.0.0.0:5000 failed
```

## Solution

Identify process.

```bash
docker ps
```

or

```bash
sudo lsof -i :5000
```

Stop conflicting process.

---

# 10. Changes Not Reflected

## Cause

- Browser cache
- Docker cache

## Solution

Hard refresh.

```
Ctrl + Shift + R
```

Rebuild.

```bash
docker compose build --no-cache
```

---

# 11. Git Push Failed

## Cause

- Authentication
- Wrong branch
- Remote configuration

## Solution

Verify.

```bash
git status

git branch

git remote -v
```

Push.

```bash
git push origin main
```

---

# 12. Jenkins Build Failed

## Cause

- Docker unavailable
- AWS authentication
- Jenkinsfile syntax
- Git checkout failed

## Solution

Review Jenkins Console Output.

Restart Jenkins.

```bash
sudo systemctl restart jenkins
```

Verify Docker.

```bash
docker ps
```

---

# 13. Jenkins Cannot Access Docker

## Error

```text
permission denied while trying to connect to the Docker daemon socket
```

## Cause

Jenkins user is not part of the Docker group.

## Solution

```bash
sudo usermod -aG docker jenkins

sudo systemctl restart jenkins
```

---

# 14. Amazon ECR Login Failed

## Error

```text
AccessDeniedException
```

or

```text
no basic auth credentials
```

## Cause

- Missing IAM Role
- Missing ECR permissions
- Expired login

## Solution

Verify identity.

```bash
aws sts get-caller-identity
```

Login again.

```bash
aws ecr get-login-password --region ap-south-1 \
| docker login \
--username AWS \
--password-stdin <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com
```

---

# 15. Docker Push Failed

## Cause

- Incorrect repository
- Authentication expired
- Invalid image tag

## Solution

Verify images.

```bash
docker images
```

Verify repositories.

```bash
aws ecr describe-repositories
```

Push again.

---

# 🔍 Useful Commands

## Running Containers

```bash
docker ps
```

---

## Container Logs

```bash
docker logs shopsphere-backend

docker logs shopsphere-frontend

docker logs shopsphere-postgres

docker logs shopsphere-nginx
```

---

## Docker Compose Logs

```bash
docker compose logs
```

---

## Docker Images

```bash
docker images
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

## Verify ECR

```bash
aws ecr describe-repositories
```

---

## Health Check

```bash
curl http://localhost:5000/health
```

---

## Products API

```bash
curl http://localhost:5000/api/products
```

---

# ✅ Best Practices

- Use IAM Roles instead of Access Keys.
- Keep Docker images versioned.
- Use Docker Compose for multi-container deployments.
- Store configuration in environment variables.
- Verify health checks after every deployment.
- Monitor Jenkins Console Output.
- Review Docker logs before rebuilding containers.
- Test deployments before pushing to production.
- Document every issue and its resolution.

---

# 🎯 Outcome

The ShopSphere project demonstrates a structured troubleshooting process covering application development, Docker, PostgreSQL, Jenkins, AWS EC2, Amazon ECR, and deployment automation.

Maintaining this guide helps reduce recovery time, improve deployment reliability, and reflects the operational practices expected in modern DevOps environments.
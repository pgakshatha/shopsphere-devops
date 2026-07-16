# 🛠️ Troubleshooting Guide

This document contains common issues encountered while developing the **ShopSphere Production-Ready DevOps Project** along with their solutions.

---

# 1️⃣ PostgreSQL Connection Error

## Problem

The backend failed to connect to PostgreSQL.

Example Error:

```text
Error: getaddrinfo ENOTFOUND postgres
```

## Cause

The backend was running outside the Docker network while trying to connect to the PostgreSQL service using the hostname **postgres**.

Docker service names are only resolvable inside the Docker network.

## Solution

- Verified the PostgreSQL container was running.
- Confirmed the database service name in `docker-compose.yml`.
- Used the correct database host based on the execution environment.
- Restarted Docker Compose.

```bash
docker compose down

docker compose up --build
```

---

# 2️⃣ PostgreSQL Database Initialization Failed

## Problem

Database initialization script failed while running:

```bash
npm run init-db
```

## Cause

The PostgreSQL database was not yet available or the connection details were incorrect.

## Solution

- Started the PostgreSQL container.
- Verified environment variables.
- Waited for PostgreSQL to become ready.
- Re-ran the initialization script.

---

# 3️⃣ Docker Container Not Starting

## Problem

One or more Docker containers exited immediately after startup.

## Cause

Possible reasons:

- Incorrect Dockerfile
- Missing dependencies
- Environment variables not configured
- Application startup error

## Solution

Check container logs.

```bash
docker compose logs
```

or

```bash
docker logs <container-name>
```

Fix the reported error and rebuild the containers.

```bash
docker compose up --build
```

---

# 4️⃣ Port Already in Use

## Problem

Docker failed to start because the required port was already occupied.

Example:

```text
Bind for 0.0.0.0:5000 failed
```

## Cause

Another application or Docker container was already using the same port.

## Solution

Check running containers.

```bash
docker ps
```

Stop the conflicting container.

```bash
docker stop <container-id>
```

or change the port configuration.

---

# 5️⃣ Frontend Unable to Fetch Products

## Problem

The React frontend displayed no products.

## Cause

Possible reasons:

- Backend not running
- Incorrect API URL
- Database connection failure

## Solution

Verify:

- Backend service is running.
- API endpoint is accessible.

```
http://localhost:5000/api/products
```

Check browser Developer Tools for network errors.

---

# 6️⃣ Health API Not Responding

## Problem

```
GET /health
```

returned an error.

## Cause

Backend server was not running.

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

Possible reasons:

- Incorrect Dockerfile
- Missing files
- Dependency installation failure

## Solution

Rebuild without using cache.

```bash
docker compose build --no-cache
```

Then restart.

```bash
docker compose up --build
```

---

# 8️⃣ Changes Not Reflected in Browser

## Problem

Frontend changes were not visible after rebuilding.

## Cause

Browser cache or Docker cache.

## Solution

- Hard refresh the browser (`Ctrl + Shift + R`)
- Restart Docker containers

```bash
docker compose down

docker compose up --build
```

---

# 9️⃣ Git Push Failed

## Problem

Unable to push changes to GitHub.

## Cause

Possible reasons:

- Authentication issue
- Repository access
- Branch mismatch

## Solution

Verify:

```bash
git status

git branch

git remote -v
```

Then push again.

```bash
git push origin main
```

---

# 🔍 Useful Debugging Commands

## View Running Containers

```bash
docker ps
```

---

## View Docker Images

```bash
docker images
```

---

## View Container Logs

```bash
docker compose logs
```

---

## Check Backend API

```
http://localhost:5000/health
```

---

## Check Product API

```
http://localhost:5000/api/products
```

---

## Verify PostgreSQL

```sql
SELECT * FROM products;
```

---

# ✅ Best Practices

- Use environment variables instead of hardcoded values.
- Verify Docker containers before debugging the application.
- Check container logs before rebuilding.
- Test API endpoints independently.
- Keep Docker images and containers updated.
- Document recurring issues and their solutions.

---

# 🎯 Outcome

By documenting the issues encountered during development, troubleshooting becomes faster and more structured.

This guide also serves as a reference for future deployments and demonstrates a systematic approach to debugging production-style applications.
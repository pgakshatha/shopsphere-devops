# 📅 Day 04 – PostgreSQL Integration

## 🎯 Goal

The objective of Day 4 was to replace the static product data with a PostgreSQL database and build a complete data flow from the database to the frontend through the Express.js backend.

This transformed ShopSphere from a static demonstration project into a dynamic full-stack application.

---

# 📌 Problem Statement

Initially, all product information was hardcoded inside the backend.

Although this approach worked for initial development, production applications require persistent data storage that can be managed, queried, and updated efficiently.

The goal was to integrate PostgreSQL, migrate product data into the database, and retrieve it dynamically using SQL queries.

---

# 🛠️ Tasks Completed

## PostgreSQL Setup

- Installed PostgreSQL
- Created the **shopsphere** database
- Verified database connectivity
- Configured PostgreSQL inside Docker

---

## Database Design

Created the **products** table with the following columns:

- id
- name
- description
- category
- price
- stock
- rating
- image
- created_at

---

## Database Seeding

Inserted sample product records into PostgreSQL for application testing.

The database now contains product information instead of hardcoded JSON data.

---

## Backend Integration

Updated the Express.js backend to:

- Establish PostgreSQL database connection
- Execute SQL queries using the **pg** driver
- Replace static product data with database queries
- Return dynamic data through REST APIs

---

## Frontend Integration

Verified that the React application successfully retrieves and displays product information directly from PostgreSQL.

Confirmed that:

- Product Listing
- Product Search
- Loading State
- Empty State

continue to function correctly using live database data.

---

# 💻 Technologies Used

## Database

- PostgreSQL
- SQL

## Backend

- Node.js
- Express.js
- pg (Node PostgreSQL Driver)

## Frontend

- React

---

# 🖥️ SQL Operations

Implemented:

- Database Creation
- Table Creation
- Insert Statements
- Select Queries

Example:

```sql
SELECT * FROM products;
```

---

# ✅ Validation

Successfully verified:

- PostgreSQL database running
- Products table created
- Sample data inserted
- Backend connected successfully
- API returning database records
- Frontend displaying PostgreSQL data
- Search functionality working with database records

---

# ⚠️ Challenges Faced

## PostgreSQL Connection Error

While initializing the database, the backend failed to connect because the hostname **postgres** could not be resolved outside the Docker network.

Example Error:

```
Error: getaddrinfo ENOTFOUND postgres
```

### Solution

- Verified Docker containers
- Checked PostgreSQL service status
- Updated database configuration
- Restarted Docker Compose
- Successfully established database connectivity

This troubleshooting process improved my understanding of Docker networking and PostgreSQL connectivity.

---

# 📸 Screenshots

- PostgreSQL Products Table
- API Response
- Product Listing
- Docker Containers
- Folder Structure

---

# 🎯 Outcome

At the end of Day 4, ShopSphere became a database-driven application.

Instead of relying on hardcoded JSON data, all product information is now stored in PostgreSQL and retrieved dynamically through REST APIs.

This significantly improved the application's scalability and prepared it for production deployment.

---

# 📚 Key Learnings

- PostgreSQL Installation
- SQL Fundamentals
- Database Design
- CRUD Data Retrieval
- Node PostgreSQL Driver
- Database Connectivity
- REST API Integration
- Docker Networking
- Backend Troubleshooting

---

# 🚀 Next Step

**Day 05 – Production Preparation**

Prepare the application for production deployment by implementing:

- Environment Variables
- Nginx Reverse Proxy
- Health Check Improvements
- Production Docker Configuration
- Project Documentation
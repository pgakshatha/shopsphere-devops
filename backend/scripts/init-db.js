const pool = require("../config/db");

async function initializeDatabase() {
    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                price INT,
                category VARCHAR(100),
                rating DECIMAL,
                stock VARCHAR(30),
                image TEXT
            );
        `);

        console.log("Products table created successfully");

    } catch (error) {

        console.error(error);

    }

    process.exit();

}

initializeDatabase();
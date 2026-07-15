const pool = require("../config/db");

async function getAllProducts() {
    const result = await pool.query(
        "SELECT * FROM products ORDER BY id"
    );

    return result.rows;
}

module.exports = {
    getAllProducts
};
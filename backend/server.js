const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to ShopSphere API");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        service: "ShopSphere Backend",
        version: "1.0.0"
    });
});

app.get("/api/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Laptop",
            price: 55000
        },
        {
            id: 2,
            name: "Mouse",
            price: 800
        },
        {
            id: 3,
            name: "Keyboard",
            price: 1200
        },
        {
            id: 4,
            name: "Monitor",
            price: 10000
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
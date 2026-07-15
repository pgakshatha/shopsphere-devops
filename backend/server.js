const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

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

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
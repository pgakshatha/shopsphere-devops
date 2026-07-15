const { getAllProducts } = require("../services/productService");

const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch products"
        });
    }
};

module.exports = {
    getProducts
};
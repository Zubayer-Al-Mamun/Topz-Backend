import express from "express";
import { getProduct, getProducts } from "./products.js";
import cors from "cors";

const app = express();
app.use(cors());

// Use dynamic port from Render or fallback to 8000 locally
const PORT = process.env.PORT || 8000;

app.get("/products", async (req, res) => {
    try {
        const products = await getProducts();
        res.json(products); // removed unnecessary await
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

app.get("/products/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await getProduct(productId);
        res.json(product); // removed unnecessary await
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch product" });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

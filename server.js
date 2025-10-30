import { v2 as cloudinary } from "cloudinary";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import streamifier from "streamifier"; // for buffer to stream
import Product, { connectDB } from "./mongodb/models.js";

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ------------------- Cloudinary config -------------------
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ------------------- Multer (Memory Storage) -------------------
const storage = multer.memoryStorage(); // ✅ use memory storage
const upload = multer({ storage });

// ------------------- Helper: Upload buffer to Cloudinary -------------------
const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                format: "webp", // 🔹 Convert to WebP
                quality: "auto:good", // 🔹 Smart optimization (aim ~500KB)
                transformation: [
                    { fetch_format: "webp", quality: "auto:good", crop: "fit" }, // 🔹 no crop
                ],
            },
            (error, result) => {
                if (result) resolve(result.secure_url);
                else reject(error);
            }
        );

        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};

// ------------------- Route -------------------
app.post("/product", upload.single("image"), async (req, res) => {
    try {
        const body = req.body;
        const file = req.file;

        // 🟢 Cloudinary upload
        let imageUrl = null;
        if (file) {
            imageUrl = await uploadToCloudinary(file.buffer);
        }

        // Example product build
        const product = new Product({
            title: body.title,
            description: body.description,
            category: body.category,
            subcategory: body.subcategory,
            pricing: Number(body.pricing),
            discountsPrice: Number(body.discountsPrice),
            discountsPercentage: Number(body.discountsPercentage),
            for: body.for,
            stock: Number(body.stock),
            mainImage: imageUrl,
            vendor: body.vendor,
            rating: body.rating,
        });

        // console.log(req.body);
        // console.log(product);

        await product.save();
        res.json({ message: "✅ Product uploaded successfully", imageUrl });
    } catch (err) {
        console.error("❌ Error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

app.get("/product/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Product.findById(id);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

app.get("/view/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Product.findById(id);
        const view = data.totalView;
        console.log(view);
        await Product.findByIdAndUpdate(id, { totalView: view + 1 });
        res.send("done..");
    } catch (err) {
        res.status(500).json({ error: "Single Product View increasing problem..." });
    }
});

app.get("/products", async (req, res) => {
    try {
        const data = await Product.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// ------------------- Start Server -------------------
app.listen(8000, () => {
    console.log("🚀 Server running on port", 8000);
});

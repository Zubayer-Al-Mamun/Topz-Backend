import mongoose from "mongoose";


export const connectDB = async () => {
    mongoose 
    .connect(`${process.env.MONGO_URI}/yaqeen`)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.error("Mongodb error"))

}

const colorSchema = new mongoose.Schema({
    color: { type: String, required: true },
    colorCode: { type: String, required: true },
    m: { type: Number, default: 0 },
    l: { type: Number, default: 0 },
    xl: { type: Number, default: 0 },
    imageUrl: { type: [String], default: [] },
});

const reviewSchema = new mongoose.Schema({
    name: { type: String},
    comment: { type: String, default: "" },
    salerComment: { type: String, default: "" },
    date: { type: Date, default: Date.now },
    rating: { type: Number, default: 0 },
    imageUrl: { type: [String], default: [] },
});

const productSchema = new mongoose.Schema(
    {
        title: { type: String},
        description: { type: String, default: "" },
        category: { type: String},
        images: { type: Array},
        subcategory: { type: String, default: "" },
        pricing: { type: Number},
        discountsPrice: { type: Number, default: 0 },
        discountsPercentage: { type: Number, default: 0 },
        for: { type: String, default: "" },
        stock: { type: Number, default: 0 },
        rating: { type: Number, default: 0 },
        vars: { type: [colorSchema], default: [] }, 
        vendor: { type: String, default: "" },
        reviews: { type: [reviewSchema], default: [] },
        totalView: { type: Number, default: 0 },
        totalSale: { type: Number, default: 0 },
        rating: { type: Number, default: 4.5 },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);



// async function fun(){
//     const data = await getProducts();


//     Product.insertMany(data)
//         .then((docs) => {
//             console.log("Products insertion successfull...", docs);
//         })
//         .catch((err) => {
//             console.log("Products insertion faild..", err);
//         });
// };

// fun();


export default Product;

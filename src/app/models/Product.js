import mongoose from "mongoose";
const schema = mongoose.Schema;
const Product = new schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    attachment: { type: String },
}, {
    timestamps: true,
})

export default mongoose.model('Products', Product);
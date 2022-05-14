import mongoose from "mongoose";
const schema = mongoose.Schema;
const Product = new schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number, default: 0 },
    promotion: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    attachment: { type: String },
}, {
    timestamps: true,
})

export default mongoose.model('Products', Product);
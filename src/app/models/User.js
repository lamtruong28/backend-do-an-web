import mongoose from "mongoose";
const schema = mongoose.Schema;
const User = new schema({
    email: { type: String },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    displayName: { type: String },
    admin: { type: Boolean, default: false },
}, {
    timestamps: true,
})

export default mongoose.model('Users', User);
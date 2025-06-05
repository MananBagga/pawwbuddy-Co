import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    userBookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
    }]
}, {timestamps: true})

export const Admin = new mongoose.model("Admin", adminSchema)
import mongoose from "mongoose";

const feedbackSchema  = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true
    },
    comments: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    }
}, {timestamps: true})

export const Feedback = new mongoose.model("Feedback", feedbackSchema)
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be minimum 1"],
        max: [5, "Rating should not exceed 5"]
    },
    feedback: {
        type: String,
        required: [true, "Feedback is required"],
        minlength: [10, "Feedback must be at least 10 characters"],
        maxlength: [500, "Feedback should not exceed 500 characters"]
    },
    review_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "Reviewer is required"],
    }
}, {
    timestamps: true
})


const ReviewModel = mongoose.model("review", reviewSchema)

module.exports = ReviewModel
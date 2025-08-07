`
date
time
meal
meal_weight
calories
protein
user: ref`

const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, "Date is required"],
        default: Date.now
    },
    time: {
        type: String,
        required: [true, "Time is required"]
    },
    meal: {
        type: String,
        required: [true, "Meal is required"],
        maxlength: [300, "Meal description should not exceed 300 characters"]
    },
    meal_weight: {
        type: Number,
        required: [true, "Meal weight is required"],
    },
    calories: {
        type: Number,
    },
    protein: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "User is required"],
    }
}, {
    timestamps: true
})


const DietModel = mongoose.model("diet", dietSchema)

module.exports = DietModel
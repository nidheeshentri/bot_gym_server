const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: [true, "Age is required"],
    },
    height: {
        type: Number,
        required: [true, "Height is required"],
    },
    weight: {
        type: Number,
        required: [true, "Height is required"],
    },
    goal: {
        type: String,
        required: [true, "Goal is required"],
        enum: ["weight_loss", "weight_gain", "muscle_building", "fitness", "strength"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required"],
        enum: ["male", "female", "other"]
    },
    health_description: {
        type: String,
        required: [true, "Health description is required"],
        maxlength: [500, "Health description should not exceed 500 characters"]
    },
    job: {
        type: String,
        maxlength: [100, "Job title should not exceed 100 characters"]
    },
    joining_date: {
        type: Date,
        required: [true, "Joining date is required"],
        default: Date.now
    }
}, {
    timestamps: true
})


const PersonalDetailsModel = mongoose.model("personalDetails", personalDetailsSchema)
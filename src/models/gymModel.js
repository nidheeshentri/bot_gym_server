const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    gym_name: {
        type: String,
        required: [true, "Gym name is required"],
        unique: true,
        trim: true,
    },
    gym_image:{
        type: String,
        trim: true
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        maxlength: [500, "Location should not exceed 500 characters"]
    },
    timing: {
        type: String,
        required: [true, "Timing is required"],
    },
    gym_admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "Gym admin is required"],
    },
    contact_details: {
        type: String,
        required: [true, "Contact details is required"],
        maxlength: [500, "Contact details should not exceed 500 characters"]
    },
    subscription_plans: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subscriptionPlan",
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
    }]
}, {
    timestamps: true
})


const GymModel = mongoose.model("gym", gymSchema)

module.exports = GymModel
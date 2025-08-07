const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
    plan_title: {
        type: String,
        required: [true, "GPlan title is required"],
        trim: true,
    },
    plan_description: {
        type: String,
        required: [true, "Plan description is required"],
        maxlength: [500, "Plan description should not exceed 500 characters"]
    },
    plan_validity: {
        type: Number,
        required: [true, "Plan validity is required"],
        min: [1, "Plan validity must be at least 1 month"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    }

}, {
    timestamps: true
})


const SubscriptionPlanModel = mongoose.model("subscriptionPlan", subscriptionPlanSchema)

module.exports = SubscriptionPlanModel
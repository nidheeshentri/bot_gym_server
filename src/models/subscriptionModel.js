const mongoose = require('mongoose');


const subscriptionSchema = new mongoose.Schema({
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subscriptionPlan",
        required: [true, "Subscription plan is required"],
    },
    valid_till: {
        type: Date,
        required: [true, "Valid till date is required"],
    },
    purchased_date: {
        type: Date,
        required: [true, "Purchase date is required"],
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "User is required"],
    },
    coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coupon",
    }

}, {
    timestamps: true
})


const SubscriptionModel = mongoose.model("subscription", subscriptionSchema)


module.exports = SubscriptionModel
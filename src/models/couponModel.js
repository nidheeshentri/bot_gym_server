const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    code: {
        type: String,
        unique: [true, "Coupon code should be unique"],
        required: [true, "Coupon code is required"]
    },
    discount: {
        type: Number,
        required: [true, "Discount is required"]
    },
    valid_till: {
        type: Date,
        required: [true, "Date is required"]
    }
}, {
    timestamps: true
})

const CouponModel = mongoose.model("coupon", couponSchema)
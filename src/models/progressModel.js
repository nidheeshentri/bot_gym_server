`_id
updated_date
description
current_weight
progress_of: user_id`

const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, "Date is required"],
        default: Date.now
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        maxlength: [500, "Description should not exceed 500 characters"]
    },
    current_weight: {
        type: Number,
        required: [true, "Current weight is required"],
    },
    progress_of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "User is required"],
    }
}, {
    timestamps: true
})

const ProgressModel = mongoose.model("progress", progressSchema)

module.exports = ProgressModel
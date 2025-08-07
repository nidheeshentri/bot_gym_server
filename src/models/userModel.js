const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"]
    },
    profile_pic: {
        type: String,
        trim: true,
        required: [true, "Profile picture is required"]
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "gym_owner", "member"],
        default: "member"
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        minlength: [10, "Phone number must be at least 10 characters"],
        maxlength: [15, "Phone number should not exceed 15 characters"]
    },
    personal_details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "personalDetails"
    },
    gym: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "gym"
    },
    status: {
        type: String,
        required: [true, "Status is required"],
        enum: ["active", "inactive"],
        default: "active"
    }
}, {
    timestamps: true
})



const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, "Date is required"],
        default: Date.now
    },
    in_time: {
        type: String,
        required: [true, "In Time is required"]
    },
    out_time: {
        type: String,
        required: [true, "Out Time is required"]
    },
    attendance_of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "User is required"],
    }
}, {
    timestamps: true
})

const AttendanceModel = mongoose.model("attendance", attendanceSchema)

module.exports = AttendanceModel
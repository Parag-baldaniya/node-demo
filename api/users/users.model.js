const mongoose = require('mongoose');

const userdsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    mobile: {
        type: String,
        required: [true, "Mobile is required"],
        minLength: [10, "Mobile is invalid"],
        maxLength: [10, "Mobile is invalid"],
        match: [/\d{10}/, "Mobile is valid"],
    },
    dob: {
        type: Date,
        required: [true, "Date is required"],
    }
});

const Users = mongoose.model("users", userdsSchema);

module.exports = Users;
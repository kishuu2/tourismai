const mongoose = require('mongoose')

const UserSchema5 = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const UserModel5 = mongoose.model("manager", UserSchema5)
module.exports = UserModel5

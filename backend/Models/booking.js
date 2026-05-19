const mongoose = require('mongoose')

const UserSchema3 = new mongoose.Schema({
    name: String,
    number: Number,
    anumber: Number,
    cnumber:Number,
    pack: String,
    additional:String,  
})

const UserModel = mongoose.model("bookings", UserSchema3)
module.exports = UserModel
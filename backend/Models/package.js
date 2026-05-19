const mongoose = require('mongoose');
const { format } = require('morgan');

const UserSchema6 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required:true,
    },
    days: {
        type: Number,
        required: true,
    },

    nights: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        require:true,
        format: 'YYYY-MM-DD'
      },
});

const packages = mongoose.model("packages", UserSchema6);
module.exports = packages;

const mongoose = require('mongoose');

const UserSchema7 = new mongoose.Schema({
    gname: {
        type: String,
        required: true,
    },
    hotel:{
        type: String,
        required: true,
    }
    ,
    pno: {
        type: Number,
        required:true,
    },
    hdays: {
        type: Number,
        required: true,
    },

    hnights: {
        type: Number,
        required: true,
    },

    roomType: {
        type: String,
        required: true,
    },

    hdate: {
        type: Date,
        require:true,
        format: 'YYYY-MM-DD'
      },
});

const hotel = mongoose.model("hotel", UserSchema7);
module.exports = hotel;

const mongoose = require('mongoose');

const detailSchema = mongoose.Schema({
    registrationId : {
        type : String,
        required : true,
        unique : true
    },

    firstName : {
        type : String,
        required : true,
    },

    middleName : {
        type : String,
        required : true,
    },

    lastName : {
        type : String,
        required : true,
    },

    gender : {
        type : String,
        required : true,
    },

    currentYear : {
        type : Number,
        required : true,
    },

    department : {
        type : String,
        required : true,
    },

    passingYear : {
        type : Date,
        required : true,
    },

    nationality : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    alternateEmail : {
        type : String,
        required : true,
        unique : true
    },

    phoneNumber : {
        type : Number,
        required : true,
        unique : true
    },

    alternatePhoneNumber : {
        type : Number,
        required : true,
        unique : true
    },

    adharNumber : {
        type : Number,
        required : true,
        unique : true
    },

    panNumber : {
        type : String,
        required : true,
        unique : true
    },

    diploma : {
        type : Boolean,
        required : true
    }
}, {timestamp : true})

const DETAILS = mongoose.model("personalDetails", detailSchema);

module.exports = DETAILS;
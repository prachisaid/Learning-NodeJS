const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    
    lastName : {
        type : String,
    },

    email : {
        type : String,
        unique : true
    },

    gender : {
        type : String,
    },

    jobTitle : {
        type : String
    }
})

const User = mongoose.model("userschema" , userSchema);

module.exports = User;
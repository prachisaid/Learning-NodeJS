const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    registrationId : {
        type : String,
        required : true,
        unqiue : true,
    },

    password : {
        type : String,
        required : true,
    }
})

const USER = mongoose.model("user", userSchema);

module.exports = USER;
const mongoose = require("mongoose");

const examSchema = mongoose.Schema({
    registrationId : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true,
    },
    semester : {
        type : Number,
        required : true
    },
    cgpa : {
        type : Number,
        required : true,
    },
    sgpa : {
        type : Number,
        required : true,
    },
    deadbacklog : {
        type : Number,
        required : true,
    },
    activebacklog : {
        type : Number,
        required : true
    }
})

const EXAMINATION = mongoose.model("examination", examSchema);

module.exports = EXAMINATION
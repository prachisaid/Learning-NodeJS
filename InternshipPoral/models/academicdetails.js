const mongoose = require("mongoose");

const academicSchema = mongoose.Schema({
    academics : [
        {
            registrationId : {
                type : String,
                required : true
            },
            education : {
                type : String,
                required : true,
            }, 
            university : {
                type : String,
                required : true,
            },
            percentage : {
                type : Number,
                required : true,
            },
            passingYear : {
                type : Date,
                required : true
            }
        }
    ]
}, {timestamp : true})

const ACADEMIC = mongoose.model("academicdetails", academicSchema);

module.exports = ACADEMIC
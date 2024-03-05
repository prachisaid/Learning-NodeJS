const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true
    }
}, {timestamps : true})

const TASK = mongoose.model("task", taskSchema);

module.exports = TASK
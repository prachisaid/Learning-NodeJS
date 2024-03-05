const mongoose = require("mongoose");

async function getDatabaseConnection(url) {
    return mongoose.connect(url);
}

module.exports = {
    getDatabaseConnection
}
const express = require('express');
const {getDatabaseConnection} = require("./connect");
const router = require('./routes/user')

const app = express();
getDatabaseConnection("mongodb://127.0.0.1:27017/internship").then(() => console.log("MongoDb Connected"));

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/', router)

app.listen(8000, () => console.log("Server Started"));
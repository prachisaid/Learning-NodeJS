const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const {getConnection} = require("./connect")
const router = require("./routes/taskroute")

const cors = require("cors")

const app = express()
getConnection("mongodb://127.0.0.1:27017/fullstack").then(() => console.log("MongoDB Connected"))

app.use(express.json())
app.use(cors())

app.use("/api", router)

app.listen(8000, () => console.log("Server Connected"));
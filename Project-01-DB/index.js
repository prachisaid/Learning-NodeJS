const express = require('express')
const userRouter = require('./routes/user')
const { connectMongoDb } = require('./connection')
const { logReqRes } = require("./middlewares")

const app = express()
const PORT = 8000

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/first-project-db").then(() => {console.log("MongoDb Connected")})

// Middleware
app.use(express.urlencoded({ extended : false }))
app.use(logReqRes("log.txt"))

// Routes
app.use("/api/users", userRouter)

app.listen(8000, () => {console.log("Server Started at port " + PORT)})
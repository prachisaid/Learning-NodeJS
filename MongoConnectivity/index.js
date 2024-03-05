const express = require("express")
const User = require("./models/user")
const {getConnection} = require("./connection")
const route = require("./routes/route")

const app = express()
const PORT = 8000

app.use(express.urlencoded({extended : false}))

getConnection("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log("MongoDb Connected"))

app.use("/users", route)

app.listen(PORT, (err) => console.log("Server Started"))
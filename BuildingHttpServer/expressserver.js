const express = require('express')

const app = express()

app.get("/" , (req, res) => {
    return res.end("Hello from home page")
})

app.get("/about" , (req, res) => {
    return res.end("Hello from about page " + "\nHey " + req.query.search + " you are " +req.query.age)
})


app.listen(8000, () => {console.log("Server Started")})
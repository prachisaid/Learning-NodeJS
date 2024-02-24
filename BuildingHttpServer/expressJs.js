const express = require("express")

const app = express()

app.get('/', (req, res) => {
    return res.send("Hello From Home Page" + "hey " + req.query.name)
})

app.get('/about', (req, res) => {
    return res.send("Hello From About Page" + " Hey " + req.query.name)
})

app.listen(8000, () => console.log("Server Started"))
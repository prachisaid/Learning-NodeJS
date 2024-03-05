const express = require('express')
const urlRoutes = require("./routes/url")
const {connectToMongoDB} = require("./connect")
const URL = require("./models/url")

const app = express()
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then( () => {console.log("MongoDb connected")})

app.use(express.json())

app.use("/url", urlRoutes)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        {
            shortId
        }, 
        { 
            $push : {
                visitHistory : {
                    timestamp : Date.now()
                }
            }
        }
    )

    console.log(entry)

    return res.redirect(entry.redirectURL)
})

app.listen(PORT, () => console.log("Server started at port " , PORT))
const express = require("express")
const paths = require("path")
const URL = require("./models/url")
const {getConnection} = require("./connect")
const cookieParse = require('cookie-parser')
const { checkForAuthentication , restrictToRole} = require("./middlewares/auth")

const router = require("./routes/route")
const staticRouter = require("./routes/staticRouter")
const userRouter = require('./routes/user')

const app = express();
getConnection("mongodb://127.0.0.1:27017/shortUrl1").then(() => console.log("MongoDb Connected"))

app.set("view engine", "ejs")
app.set("views", paths.resolve(("./views")))

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParse())
app.use(checkForAuthentication)

app.get('/test', async (req, res) => {
     const allUrls = await URL.find({})
     return res.render('home', {
        urls : allUrls,
     })
})

app.use('/url', restrictToRole(["NORMAL", "ADMIN"]) ,router)
app.use('/user', userRouter)
app.use('/', staticRouter)

app.listen(8000, () => console.log("Server Started with good condition"))
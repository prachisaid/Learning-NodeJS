const mongoose = require("mongoose")
const shortid = require("shortid")
const URL = require("../models/url")

async function handleGenerateShortURL(req, res) {
    const body = req.body;

    if(!body) {
        return res.status(400).json({msg : "Requires all fields"})
    }
    
    const shortID = shortid()
    await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitHistory : []
    })

    return res.render('home', {
        id : shortID
    })
    // return res.status(201).json({id : shortID})

}

async function handleRedirectURL(req, res) {
    console.log(req.params.id)
    const shortId = req.params.id;
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

    console.log(entry);

    res.redirect(entry.redirectUrl)
}

async function handleGetAnalytics(req, res) {
    const shortId  = req.params.id;
    const result = await URL.findOne({ shortId })
    console.log(result.visitHistory.length)

    return res.json({msg : result.visitHistory.length})
}

module.exports = {
    handleGenerateShortURL,
    handleRedirectURL,
    handleGetAnalytics
}
const shortid = require('shortid')
const URL = require('../models/url')

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    
    if(!body) return res.status(400).json({error : 'Url required'})

    const shortID = shortid()
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory : []
    })

    return res.json({id : shortID})
}

module.exports = {
    handleGenerateNewShortURL
}
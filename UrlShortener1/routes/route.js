const express = require("express")
const {handleGenerateShortURL, handleRedirectURL, handleGetAnalytics} = require("../controllers/url")
const router = express.Router()

router.post('/', handleGenerateShortURL);
router.get('/:id', handleRedirectURL);
router.get('/analytics/:id', handleGetAnalytics)

module.exports = router
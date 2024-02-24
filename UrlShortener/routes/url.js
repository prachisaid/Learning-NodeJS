const express = require('express')
const { handleGenerateNewShortURL } = require('../controllers/urls')
const router = express.Router();

router.post("/", handleGenerateNewShortURL)

module.exports = router
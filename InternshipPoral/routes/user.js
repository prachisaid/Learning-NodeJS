const express = require('express')
const router = express.Router()
const {handleLoginUser} = require('../controller/user')

router.post('/', handleLoginUser);

module.exports = router
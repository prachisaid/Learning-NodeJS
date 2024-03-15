const express = require('express')
const router = express.Router()
const {handleLoginUser, handlePersonalDetails, handleAcademicDetails, handleExaminationDetails} = require('../controller/user')

router.post('/', handleLoginUser);
router.post('/details', handlePersonalDetails);
router.post('/academic', handleAcademicDetails);
router.post('/examination', handleExaminationDetails);

module.exports = router
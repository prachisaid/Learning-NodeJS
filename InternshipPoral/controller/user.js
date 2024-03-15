const USER = require("../models/user")
const DETAILS = require('../models/personaldetails');
const ACADEMIC = require("../models/academicdetails");
const EXAMINATION = require("../models/examination");

async function handleLoginUser(req, res) {
    const {reg, pass} = req.body;
    const allUsers = await USER.find({})
    console.log(allUsers)
    let found = false;

    allUsers.map((user) => {
        if(user.registrationId === reg && user.password == pass) {
            found = true
        }
    })

    return res.json({msg  : (found) ? "User found" : "User does'nt exist"});
}

async function handlePersonalDetails(req, res) {
    console.log(req.body)
    if(!req.body) return res.status(404).json({msg : "No data found"});
    const {reg, fname, lname, mname, gender, year, dept, passing, nationality, email, altemail, phone, altphone, adhar, pan, diploma} = req.body;

    await DETAILS.create({
        registrationId : reg,
        firstName : fname,
        lastName : lname,
        middleName : mname,
        gender : gender,
        currentYear : year,
        department : dept,
        passingYear : passing,
        nationality :nationality,
        email : email,
        alternateEmail : altemail,
        phoneNumber : phone,
        alternatePhoneNumber : altphone,
        adharNumber : adhar,
        panNumber : pan,
        diploma : diploma
    })
    .then((err) => { return res.json({msg : "Inserted successfully"}) })

    // , gender, year, dept, passing, nationality, email, altemail, phone, altphone, adhar, pan, diploma
    return res.json({msg : "Could'nt insert"})
}

async function handleAcademicDetails(req, res) {
    console.log(req.body)
    if(!req.body) return res.status(404).json({msg : "No data found"});
    const {reg, education, uni, pre, passing} = req.body;

    await ACADEMIC.create({
        academics : [
            {
                registrationId : reg,
                education : education,
                university : uni,
                percentage : per,
                passingYear : passing
            }
        ]
    })
    .then((err) => { return res.json({msg : "Inserted successfully"}) })

    // return res.json({msg : "Could'nt insert"})
}

async function handleExaminationDetails(req, res) {
    console.log(req.body)
    if(!req.body) return res.status(404).json({msg : "No data found"});
    const {reg, year, semester, cgpa, sgpa, dead, active} = req.body;
    

    await EXAMINATION.create({
        registrationId : reg,
        year : year,
        semester : semester,
        cgpa : cgpa,
        sgpa : sgpa,
        deadbacklog : dead,
        activebacklog : active
    })
    .then((err) => { return res.json({msg : "Inserted successfully"}) })

    // return res.json({msg : "Could'nt insert"})
}

module.exports = {
    handleLoginUser,
    handlePersonalDetails,
    handleAcademicDetails,
    handleExaminationDetails
}
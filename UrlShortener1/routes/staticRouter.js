const express = require("express")
const route = express.Router();
const URL = require('../models/url');
const { restrictToRole } = require("../middlewares/auth");

route.get('/', restrictToRole(['NORMAL', 'ADMIN']) ,async (req, res) => {    
    // if(!req.user) return res.render("/login");
    const allurls = await URL.find({email : req.user._id})
    console.log(allurls)
    return res.render('home', {
        urls : allurls
    })
})

route.get('/admin/urls', restrictToRole(['ADMIN']) ,async (req, res) => {    
    // if(!req.user) return res.render("/login");
    const allurls = await URL.find({})
    console.log(allurls)
    return res.render('home', {
        urls : allurls
    })
})

route.get('/signup', async(req, res) => {
    return res.render("signup")
})

route.get('/login', async(req, res) => {
    return res.render("login")
})

module.exports = route
const User = require("../models/user")

async function handleGetAllUsers(req, res) {
    const u = await User.find();
    res.status(200).json(u)
}

async function handleGetUserById(req, res) {
    const u = await User.findById(req.params.id);
    res.status(200).json(u)
}

async function handleCreateUser(req, res) {
    const body = req.body;

    if(!body || !body.firstName || !body.lastName || !body.email || !body.jobTitle || !body.gender) {
        res.status(400).json({msg : "All fields are required"})
    }

    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        jobTitle : body.jobTitle,
        gender : body.gender
    })

    console.log(result)

    return res.status(201).json({status : "success"})
}

async function handleUpdateUser(req, res) {
    console.log(req.params.id)
    await User.findByIdAndUpdate(req.params.id, { lastName : "Changed" })
    return res.json({status : "success"})
}

async function handleDeleteUser(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "success"})
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser
}
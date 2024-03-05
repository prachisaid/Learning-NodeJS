const USER = require("../models/user")

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

module.exports = {
    handleLoginUser
}
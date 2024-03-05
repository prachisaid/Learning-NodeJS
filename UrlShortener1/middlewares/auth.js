const { getUser } = require("../service/auth")

async function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.token;
    req.user = null
    if(!tokenCookie) {
        return next();
    } 

    const token = tokenCookie;
    const user = getUser(token)
    req.user = user;
    return next()
}

function restrictToRole(roles = []) {
    return function(req, res, next) {
        console.log(req.user)
        if(!req.user) {
            return res.redirect("/login");
        }

        if(!roles.includes(req.user.role)) {
            return res.end("Unautorized")
        }

        return next()
    }
}

module.exports = {
    checkForAuthentication,
    restrictToRole
}
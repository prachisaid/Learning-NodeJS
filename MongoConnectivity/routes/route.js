const express = require("express")
const route = express.Router()
const {handleGetAllUsers, handleGetUserById, handleCreateUser, handleUpdateUser, handleDeleteUser} = require("../controllers/user")

route.get("/", handleGetAllUsers)

route.get("/:id",handleGetUserById)

route.post("/", handleCreateUser)

route.patch("/:id", handleUpdateUser)

route.delete("/:id", handleDeleteUser)

module.exports = route
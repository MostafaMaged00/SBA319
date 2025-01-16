const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");


//Routes - Get all users from database
userRoutes.get("/api/users/", userController.listUsers);

//Route - Create a user
userRoutes.post("/api/users/register", userController.addUser);
module.exports = userRoutes;

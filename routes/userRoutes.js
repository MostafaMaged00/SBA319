const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

//Routes - Get all users from database
userRoutes.get("/api/users/", userController.listUsers);

//Routes Show a form to add user
userRoutes.get("/adduser", (req, res) => {
  res.render("adduser");
});

//Routes Render all users
userRoutes.get("/users", (req, res) => {
  res.render("users");
});

//Route - Create a user
userRoutes.post("/api/users/register", userController.addUser);
module.exports = userRoutes;

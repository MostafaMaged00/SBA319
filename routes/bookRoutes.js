const express = require("express");
const bookRoutes = express.Router();
const bookController = require("../controllers/bookController");

//Routes
bookRoutes.get("/api/books/", bookController.listBooks);

module.exports = bookRoutes;

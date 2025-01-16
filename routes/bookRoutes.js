const express = require("express");
const bookRoutes = express.Router();
const bookController = require("../controllers/bookController");

//Routes
bookRoutes.get("/api/books/", bookController.listBooks);

bookRoutes.post("/api/books/register", bookController.addBook);

module.exports = bookRoutes;

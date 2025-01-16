const express = require("express");
const bookRoutes = express.Router();
const bookController = require("../controllers/bookController");

//Routes
bookRoutes.get("/api/books/", bookController.listBooks);

bookRoutes.get("/books", (req, res) => {
  res.render("books");
});
bookRoutes.post("/api/books/register", bookController.addBook);

module.exports = bookRoutes;

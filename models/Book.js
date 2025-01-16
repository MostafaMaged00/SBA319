//Import mongoose
const mongoose = require("mongoose");

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

// Create and export the Book model
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

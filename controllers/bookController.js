const Book = require("../models/Book");
exports.listBooks = async (req, res) => {
  //res.send("This is Books controllers");
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving books", error: err.message });
  }
};

exports.addBook = async (req, res) => {
  try {
    const { title, author, isbn, publishedDate, pages, genre, description } =
      req.body;

    const book = new Book({
      title,
      author,
      isbn,
      publishedDate,
      pages,
      genre,
      description,
    });

    await book.save();
    res.status(201).json({ message: "Book added successfully!", book });
  } catch (err) {
    res.status(500).json({ message: "Error adding book", error: err.message });
  }
};

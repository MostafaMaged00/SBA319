//Imports
const User = require("../models/User");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
//function to get all users
exports.listUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Function to add user to database
exports.addUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already taken" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

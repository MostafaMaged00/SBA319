//Import mongoose
const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures that emails are unique
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true, // Password is required
    minlength: 6, // Ensures that the password is at least 6 characters long
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Defines the roles (user/admin)
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model
const User = mongoose.model("User", userSchema);

module.exports = User;

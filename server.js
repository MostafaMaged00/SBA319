//Imports
const express = require("express");
require("dotenv").config();
const path = require("path");
// Import user model
const User = require("./models/User");
const app = express();
const port = process.env.PORT || 4000;
//Database connection
const conn = require("./database/db");
conn();

//MiddleWare functions
app.use(express.static("public")); //use static folder public

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//HomePage
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/addbook", (req, res) => {
  res.render("addbook");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes - Get all routes
const userRoute = require("./routes/userRoutes");
const bookRoute = require("./routes/bookRoutes");
app.use("/", userRoute);
app.use("/", bookRoute);

//Start the server on port 4000
app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);

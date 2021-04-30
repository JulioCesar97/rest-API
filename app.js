require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
app.use("/api", require("./routes/tours.routes"));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the API" });
});

module.exports = app;

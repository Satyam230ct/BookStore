const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/book-routes");
const cors = require("cors");
require('dotenv').config()

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);

const PORT = process.env.PORT || 2711;

mongoose.connect(  process.env.DB )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT,() => console.log(`Server is running on ${PORT}`));
  })
  .catch((err) => console.log(err));
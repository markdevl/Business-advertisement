const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./db");
const itemModel=require('./models/item')

const app = express();
app.use(express.json());
app.use(cors());

connectDB();



app.listen(3001, () => {
  console.log("server is running");
});

const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Amjilt_Bootcamp_Node", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connectod");
    });
};

module.exports = connectDB;

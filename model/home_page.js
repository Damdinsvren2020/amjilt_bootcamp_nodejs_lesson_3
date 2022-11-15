const mongoose = require("mongoose");

const Home_pageSchema = {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  photo: { type: String, default: "no-photo.jpg" },
  createAt: { type: Date, default: Date.now },
};

module.exports = mongoose.model("Home_Page", Home_pageSchema);

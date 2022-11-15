const mongoose = require("mongoose");

const Home_page_medeelelSchema = {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  photo: {
    type: String,
  },
  createAt: { type: Date, default: Date.now },
};

module.exports = mongoose.model("Home_page_medeelel", Home_page_medeelelSchema);

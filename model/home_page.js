const mongoose = require("mongoose");

const Home_pageSchema = {
  name: {
    type: String,
    required: [true, "Нүүр хуудасны мэдээллийг оруулна уу"],
    unique: true,
    maxlength: [200, "Нүүр хуудасны нэрны урт дээд талд нь 200 тэмдэгт байна"],
  },
  description: {
    type: String,
    required: [true, "Тайлбар мэдээлэл оруулна уу !!!"],
    maxlength: [1000, "Нүүр хуудасны тайлбар 1000 тэмдэгт байна"],
  },
  photo: { type: String, default: "no-photo.jpg" },
  createAt: { type: Date, default: Date.now },
};

module.exports = mongoose.model("Home_Page", Home_pageSchema);

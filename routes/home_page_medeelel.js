const express = require("express");

const {
  getHome_page_medeelels,
  getHome_page_medeelel,
  createHome_page_medeelel,
} = require("../controller/home_page_medeelel");
const router = express.Router();

router.route("/").get(getHome_page_medeelels);
router.route("/:id").get(getHome_page_medeelel);
router.route("/").post(createHome_page_medeelel);

module.exports = router;

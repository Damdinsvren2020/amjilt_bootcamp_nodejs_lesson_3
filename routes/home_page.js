const express = require("express");
const router = express.Router();
const {
  getHome_Pages,
  getHome_Page,
  createHome_Page,
  updateHome_Page,
  deleteHome_Page,
} = require("../controller/home_page");

router.route("/").get(getHome_Pages);
router.route("/:id").get(getHome_Page);
router.route("/").post(createHome_Page);
router.route("/:id").put(updateHome_Page);
router.route("/:id").delete(deleteHome_Page);
module.exports = router;

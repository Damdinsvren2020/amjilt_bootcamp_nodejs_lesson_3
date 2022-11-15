const { check, validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcrypt-node");
const async = require("async");
const winston = require("winston");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/user");
const config = require("../utils/config");

function compareAsync(param1, param2) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(param1, param2, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

router.get("/get_user_list", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
});

router.post(
  "/saveUser",
  [
    check("_id").trim(),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Имэйл оруулна уу")
      .isEmail()
      .withMessage("Имэйл буруу байна")
      .trim(),
    check("first_name").not().isEmpty().withMessage("Нэр оруулна уу").trim(),
    check("last_name").not().isEmpty().withMessage("Овог оруулна уу").trim(),
    check("role").not().isEmpty().withMessage("Эрх сонгоно уу").trim(),
    check("password").trim(),
    check("passwordRepeat").trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(200)
        .json({ success: false, message: errors.array()[0].msg });
    }
    let data = matchedData(req);
    if (data._id) {
      await User.updateOne({ _id: data._id }, { ...data }).exec((err) => {
        if (err) {
          return res
            .status(500)
            .json({ success: false, message: "Системд алдаа гарлаа" });
        }
        return res
          .status(200)
          .json({ success: true, message: "Амжилттай хадгалагдлаа Update" });
      });
    } else {
      if (data.password === data.passwordRepeat) {
        const user = new User();
        const pass = bcrypt.hashSync(data.password);
        user.email = req.body.email;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.password = pass;
        user.phone = req.body.phone;
        user.role = req.body.role;
        user.save((err, sss) => {
          console.log("SS", sss);
          if (err) {
            winston.error(err);
            return res
              .status(500)
              .json({ success: false, message: "Системд алдаа гарлаа" });
          }
          return res.status(200).json({
            success: true,
            sucmod: true,
            message: "Амжилттай хадгалагдлаа",
          });
        });
      } else {
        return res.json({
          success: false,
          sucmod: true,
          message: "Нууц үг зөрж байна",
        });
      }
    }
  }
);

router.post(
  "/login",
  [
    check("email")
      .not()
      .isEmpty()
      .withMessage("Имэйл оруулна уу")
      .isEmail()
      .withMessage("Имэйл буруу байна")
      .trim(),
    check("password").not().isEmpty().withMessage("Нууц үг оруулна уу").trim(),
  ],
  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(200)
        .json({ success: false, message: errors.array()[0].msg });
    }
    let data = matchedData(req);
    let result = await User.findOne({
      email: data.email.toLowerCase(),
      status: "active",
    });

    if (result) {
      let ps = result.password.replace("$2y$", "$2a$");
      const check = await compareAsync(data.password, ps);
      if (check) {
        let token = jwt.sign({ id: result._id }, config.sessionSecret, {
          expiresIn: "24h",
        });
        result.password = "";
        return res
          .status(200)
          .json({ success: true, user: result, token: token });
      } else {
        return res
          .status(200)
          .json({ success: false, message: "Нууц үг буруу байна" });
      }
    } else {
      return res.json({ success: false, message: "Хэргэлэгч олдсонгүй" });
    }
  }
);
module.exports = router;

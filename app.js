const express = require("express");

const app = express();
const multer = require("multer");
const cors = require("cors");
const bp = require("body-parser");
const path = require("path");
const logger = require("./config/logger");
const connectDB = require("./config/mongodb");
connectDB();
const homeRouter = require("./routes/home_page");
const homemedeelelRouter = require("./routes/home_page_medeelel");
const userRouter = require("./routes/user");
app.use(express.json());
app.use("/home_pages", homeRouter);
app.use("/home_pages_medeelel", homemedeelelRouter);
app.use("/admin/api", userRouter);
// npm install --save winston

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("info", `server maani port ${port} deer amjilttai aslaa`);
});

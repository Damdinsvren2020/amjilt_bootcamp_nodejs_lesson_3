const express = require("express");

const app = express();
const logger = require("./config/logger");
const connectDB = require("./config/mongodb");
connectDB();
const homeRouter = require("./routes/home_page");
app.use(express.json());
app.use("/home_pages", homeRouter);
// npm install --save winston

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("info", `server maani port ${port} deer amjilttai aslaa`);
});

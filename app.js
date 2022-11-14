const express = require("express");

const app = express();
const logger = require("./config/logger");
const homeRouter = require("./routes/home_page");

app.use("/home_pages", homeRouter);
// npm install --save winston

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.log("info", `server maani port ${port} deer amjilttai aslaa`);
});

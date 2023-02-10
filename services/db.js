const chalk = require("chalk");
const mongoose = require("mongoose");

// This use for connect the mongoDB with the server
module.exports = mongoose
  .connect(process.env.BASE_URL)
  .then((_) => console.log(chalk.yellow("MongoDB connection success")))
  .catch((err) => console.log(chalk.red("MongoDB connection error", err)));

// chalk is used for the color of the console
const chalk = require("chalk");

const response = {
  // Thats over success response function without data
  getResponsesuccess: (statusCode, message, res) => {
    console.log(chalk.greenBright(message));
    return res.status(statusCode).json({
      message,
    });
  },
  // Thats over error response function without data
  errorResponse: (statusCode, message, res) => {
    console.log(chalk.red(message));
    return res.status(statusCode).json({
      message,
    });
  },
};

module.exports = response;

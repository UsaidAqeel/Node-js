const express = require("express");
const userAuthController = require("../controllers/userAuth.controller");
const { errorResponse } = require("../utils/response");

const userAuthRotuer = express.Router();

// Example dammuy user Data
const user = [
  {
    userName: "Usaid",
    fatherName: "Akeel",
    id: 1,
  },
  {
    userName: "Usaid1",
    fatherName: "Akeel",
    id: 1,
  },
];

// Auth user middlle wear
function match(req, res, next) {
  const reqBody = req.body;
  const findUser = user.filter((val) => val.userName == reqBody.name);
  if (findUser.length > 0) {
    return next();
  }
  errorResponse(500, "not match", res);
}

userAuthRotuer
  .route("/login")
  .get(match, userAuthController.userloginController);

module.exports = userAuthRotuer;
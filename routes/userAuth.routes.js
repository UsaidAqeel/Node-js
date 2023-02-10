const express = require("express");
const userAuthController = require("../controllers/userAuth.controller");
const userAuthMiddlewear = require("../middlewear/userAuth.middlewear");

const userAuthRotuer = express.Router();

userAuthRotuer.route("/login").get(userAuthController.userloginController);

module.exports = userAuthRotuer;
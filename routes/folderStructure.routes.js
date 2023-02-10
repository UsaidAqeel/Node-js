const express = require("express");
const folderStructurecontroller = require("../controllers/folderStructure.controller");
const folderStructureRoutes = express.Router();

folderStructureRoutes
  .route("/makefile/:name")
  .post(folderStructurecontroller.makeFolder);

module.exports = folderStructureRoutes;

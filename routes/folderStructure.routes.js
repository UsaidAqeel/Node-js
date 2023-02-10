const express = require("express");
const folderStructurecontroller = require("../controllers/folderStructure.controller");
const folderStructureRoutes = express.Router();

folderStructureRoutes
  .route("/makefile/:name")
  .post(folderStructurecontroller.makeFolder);


folderStructureRoutes
  .route("/sendhtmlfile")
  .get(folderStructurecontroller.sendHtmlFile);

module.exports = folderStructureRoutes;

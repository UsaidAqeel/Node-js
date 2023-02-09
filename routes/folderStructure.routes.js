const express = require('express');
const controlles = require('../controllers/index.controller');

const folderStructureRoutes = express.Router();


folderStructureRoutes.route('/makefile/:name')
.post(controlles.makeFolder)

module.exports = folderStructureRoutes
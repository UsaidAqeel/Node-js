const fs = require("fs");
const path = require("path");
const response = require("../utils/response");

const folderStructurecontroller = {
  // In this we make folder inside the folders directory
  makeFolder: (req, res) => {
    try {
      let folderName = req.params.name;
      // over all folder is created in this directory. /folders
      fs.mkdir(
        path.join("./folders", folderName),
        { recursive: true },
        (err) => {
          if (err)
            return response.errorResponse(501, "directory not created", res);
          response.getResponsesuccess(200, "directory created success", res);
        }
      );
    } catch (err) {
      return response.errorResponse(501, "directory created err", res);
    }
  },
};

module.exports = folderStructurecontroller;

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
  // This is use for send the html file to the client //
  sendHtmlFile: (req, res) => {
    try {
      console.log("file sended");
      // sendFile is use for the send file to the client
      //   {root: path.join(__dirname, "../assets/html"),} this is use for file path
      return res.sendFile("index.html", {
        root: path.join(__dirname, "../assets/html"),
      });
    } catch (err) {
      console.log("file sendind error");
    }
  },
};

module.exports = folderStructurecontroller;

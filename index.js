// chalk is used for the color of the console
const chalk = require("chalk");
const express = require("express");
const folderStructureRoutes = require("./routes/folderStructure.routes");
const userAuthRotuer = require("./routes/userAuth.routes");
const { Server } = require("socket.io");
const { createServer } = require("http");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: "./.env" });
require("./services/db");

const PORT = process.env.PORT || 8001;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
app.use(cors());
app.use(express.json());
app.use(folderStructureRoutes, userAuthRotuer);


httpServer.listen(PORT, () => {
  console.log(chalk.cyanBright(`Server runing at localhost:${PORT}`));
});

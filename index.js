// chalk is used for the color of the console
const chalk = require("chalk");
const express = require("express");
const folderStructureRoutes = require("./routes/folderStructure.routes");
const userAuthRotuer = require("./routes/userAuth.routes");
require("dotenv").config({ path: "./.env" });
require("./services/db");

const app = express();
const PORT = process.env.PORT || 8001;
app.use(express.json());
app.use(folderStructureRoutes, userAuthRotuer);

app.listen(PORT, () =>
  console.log(chalk.cyanBright(`Server runing at localhost:${PORT}`))
);

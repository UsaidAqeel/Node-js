// chalk is used for the color of the console
const chalk = require("chalk");
const app = require("express")();
const folderStructureRoutes = require("./routes/folderStructure.routes");
const userAuthRotuer = require("./routes/userAuth.routes");
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
require("./services/db");

const PORT = process.env.PORT || 8001;
app.use(require("express").json());
app.use(cors());
app.use(folderStructureRoutes, userAuthRotuer);

app.get("/", (req, res) => {
  console.log(req.body);
});

// This is for chat application
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", (_) => {
    console.log("user disconnected");
  });
});

// This is for the count

let count = 0;
io.on("connection", (socket) => {
  socket.on("count", (msg) => {
    count++;
    io.emit("count", count  );
  });
});

httpServer.listen(PORT, () => {
  console.log(chalk.cyanBright(`Server runing at localhost:${PORT}`));
});

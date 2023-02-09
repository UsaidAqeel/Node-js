const express = require('express');
const folderStructureRoutes = require('./routes/folderStructure.routes');
const userAuthRotuer = require('./routes/userAuth.routes');

const app = express();
const PORT = process.env.PORT || 8001;
app.use(express.json())
app.use(folderStructureRoutes,userAuthRotuer)

app.listen(PORT, () => console.log(`Server runing at localhost:${PORT}`)); 
const express = require('express');
const folderStructureRoutes = require('./routes/folderStructure.routes');

const app = express();
const PORT = process.env.PORT || 8001;
app.use(express.json())
app.use(folderStructureRoutes)

app.listen(PORT, () => console.log(`Server runing at localhost:${PORT}`)); 
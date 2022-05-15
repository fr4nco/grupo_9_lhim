const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.listen(3030, () =>
    console.log("Listo! servidor con Express"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});
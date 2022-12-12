const express = require("express");
const app = express();
const {db} = require("./db");

const port = 3000;

app.listen(port, () => {
    db.sync();
    console.log("Your server is listening on port " + port);
})
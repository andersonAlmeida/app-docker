const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World 1</h1>");
});

app.listen(PORT, HOST);

const express = require("express");
require("./app/models/index.js");

const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = app;
const express = require("express");
require("./app/models/index.js");

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

const router = require('./app/routes/index.js')
app.use('/api', router)

module.exports = app;
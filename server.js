"use-strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Joi = require("joi");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extend: true }));

app.get("/", (req, res) => {
  // service index.html in current working directory (__dirname)
  res.sendFile(__dirname + "/index.html");
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

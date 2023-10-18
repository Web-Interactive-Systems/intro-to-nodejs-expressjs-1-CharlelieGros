/**
 Todo Complete this app
 
 - Check the documentation of expressjs to serve a json response
 - Add an array of matches to the file `data/matchs.json`
 - Create an express server that serve the content of `data/matchs.json` as a json response
 */

var express = require("express");
const matchs = require("../data/matchs.json");
var app = express();
var port = 3000;

app.get("/api/all", (req, res) => {
  res.json(matchs);
});

app.listen(port, () => {
  console.log("running...");
});

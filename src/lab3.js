/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create a server that serves a static folder: `public`
 - If an url is not found, the server should serve 'Page not found'
 */

var express = require("express");
var app = express();
var port = 3000;

app.use(express.static("public"));
app.use((err, req, res) => {
  req.status(404).send("Something broke!");
});

app.listen(port, () => {
  console.log("listening...");
});

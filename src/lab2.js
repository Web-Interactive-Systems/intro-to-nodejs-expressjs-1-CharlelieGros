/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create an express server
 - The server should implements the following APIs
  // app.get
  // app.post
  // app.put
  // app.delete
  // app.all
  // app.use
  // app.listen

  -- Hint, use postman to interact with the server 
  
 */

var express = require("express");
var app = express();
var port = 3000;

app.use(express.json());

app.get("/api/ping", (req, res) => {
  console.log("GET-PING", req.url);
  res.status(200).send("pong");
});

app.post("/api/add", (req, res) => {
  console.log("POST-ADD", req.body);
  res.status(200).send("saved !");
});

app.delete("/api/delete", (req, res) => {
  console.log("DELETE", req.body);
  res.status(200).send("deleted");
});

app.listen(port, () => {
  console.log("running...");
});

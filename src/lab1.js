const http = require("http");
const fs = require("fs");

/**
 Todo Complete this app to serve the content inside `static` folder
 
 - Create an http server that serves the app in: `static/html/index.html`
 - The app shows navigation pages that should be created and placed inside `static/html`
 - If an url is not found the app should serve "Page not found"

 -- Hint, it possible to read a file using `readFileSync` of fs module and serve it to the client
 */

const INDEX_URL = "./src/static/html/index.html";

const server = http.createServer((req, res) => {
  console.log(`running...`);
  let url;
  req.url === "/" ? (url = INDEX_URL) : (url = `./src/static/html${req.url}`);
  fs.readFile(url, undefined, (err, data) => {
    if (err) {
      res.end("<p>Error 404 - Page not Found</p>");
    } else res.end(data);
  });
});
server.listen(3000);

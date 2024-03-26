const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url === "/" ? "./index.html" : `.${req.url}`;
    console.log(url);
    fs.readFile(url, (err, data) => {
      if (err) {
        const page404 = fs.readFileSync("./404.html", "utf8");
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(page404);
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(data);
    });
  })
  .listen(8080, () => {
    console.log("Server is running on port 8080");
  });

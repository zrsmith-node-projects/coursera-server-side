const express = require("express");
const http = require("http");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Context-Type", "text/html");
  res.send({ message: "You are using Express" });
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at htt://${hostname}:${port}`);
});

const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Context-Type", "text/plain");
  next();
});

app.get("/dishes", (req, res) => {
  res.end("Will send all the dishes to you!");
});

app.post("/dishes", (req, res) => {
  res.end(
    "Will add the dish: " +
      req.body.name +
      " with details: " +
      req.body.description
  );
});

app.put("/dishes", (req, res) => {
  res.statusCode = 403;
  res.end("PUT operation not supported on /dishes");
});

app.delete("/dishes", (req, res) => {
  res.end("Deleting all the dishes");
});

app.get("/dishes/:id", (req, res) => {
  res.end("Will send details of the dish: " + req.params.id);
});

app.post("/dishes/:id", (req, res) => {
  res.statusCode = 403;
  res.end("POST operation not supported on /dishes/" + req.params.id);
});

app.put("/dishes/:id", (req, res) => {
  res.write("updating dish " + req.params.id + "\n");
  res.end(
    "Will update the dish: " +
      req.body.name +
      " with details " +
      req.body.description
  );
});

app.delete("/dishes/:id", (req, res) => {
  res.end("Deleting dish: " + req.params.id);
});

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at htt://${hostname}:${port}`);
});

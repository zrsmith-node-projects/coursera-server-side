const express = require("express");
const http = require("http");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Context-Type", "text/html");
  res.end(
    <html>
      <bdoy>
        <h1>This is an express server</h1>
      </bdoy>
    </html>
  );
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at htt://${hostname}:${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Context-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the dishes to you!");
  })

  .post((req, res) => {
    res.end(
      "Will add the dish: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
  })
  .delete((req, res) => {
    res.end("Deleting all the dishes");
  });

dishRouter
  .route("/:id")
  .get((req, res) => {
    res.end("Will send details of the dish: " + req.params.id);
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /dishes/" + req.params.id);
  })

  .put((req, res) => {
    res.write("updating dish " + req.params.id + "\n");
    res.end(
      "Will update the dish: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })

  .delete((req, res) => {
    res.end("Deleting dish: " + req.params.id);
  });

module.exports = dishRouter;

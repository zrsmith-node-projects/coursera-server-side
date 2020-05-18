const express = require("express");
const bodyParser = require("body-parser");
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Context-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the leaders to you!");
  })

  .post((req, res) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /leaders");
  })
  .delete((req, res) => {
    res.end("Deleting all the leaders");
  });

leaderRouter
  .route("/:id")
  .get((req, res) => {
    res.end("Will send details of the leader: " + req.params.id);
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /leaders " + req.params.id);
  })

  .put((req, res) => {
    res.write("updating leader " + req.params.id + "\n");
    res.end(
      "Will update the leader: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })

  .delete((req, res) => {
    res.end("Deleting leader: " + req.params.id);
  });

module.exports = leaderRouter;

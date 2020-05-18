const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const URL = "mongodb://localhost:27017/";
const dbname = "conFusion";
MongoClient.connect(URL, (err, client) => {
  assert.equal(err, null);

  console.log("Connected correctly to server");

  const db = client.db(dbname);
  const collection = db.collection("dishes");
  collection.insertOne(
    { name: "pizza", description: "testing pizza" },
    (err, result) => {
      assert.equal(err, null);
      console.log("After insert");
      console.log(result.ops);

      collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);

        console.log("Found: \n");
        console.log(docs);

        db.dropCollection("dishes", (err, result) => {
          assert.equal(err, null);

          client.close();
        });
      });
    }
  );
});

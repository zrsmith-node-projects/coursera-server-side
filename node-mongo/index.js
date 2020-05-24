const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dboper = require("./operations");

const URL = "mongodb://localhost:27017/";
const dbname = "conFusion";
MongoClient.connect(URL, (err, client) => {
  assert.equal(err, null);

  console.log("Connected correctly to server");

  const db = client.db(dbname);

  dboper.insertDocument(
    db,
    { name: "Vadonut", description: "TEST" },
    "dishes",
    (result) => {
      console.log(("insert document: \n", result.ops));
      dboper.findDocuments(db, "dishes", (docs) => {
        console.log("Found documents:\n ", docs);
        dboper.updateDocument(
          db,
          { name: "Vadonut" },
          { description: "Updated Test" },
          "dishes",
          (result) => {
            console.log("Update document:\n", result.result);
            dboper.findDocuments(db, "dishes", (docs) => {
              console.log("found updated documents:\n", docs);
              db.dropCollection("dishes", (result) => {
                console.log("Dropped collection");
                client.close();
              });
            });
          }
        );
      });
    }
  );
});

// const collection = db.collection("dishes");
//   collection.insertOne(
//     { name: "pizza", description: "testing pizza" },
//     (err, result) => {
//       assert.equal(err, null);
//       console.log("After insert");
//       console.log(result.ops);

//       collection.find({}).toArray((err, docs) => {
//         assert.equal(err, null);

//         console.log("Found: \n");
//         console.log(docs);

//         db.dropCollection("dishes", (err, result) => {
//           assert.equal(err, null);

//           client.close();
//         });
//       });
//     }
//   );

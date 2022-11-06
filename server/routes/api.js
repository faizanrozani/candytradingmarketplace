const express = require("express");

// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const apiRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// update the stash of a specific email
apiRoutes.route("/api/update/stash").post(function (req, res) {
  let db_connect = dbo.getDb("candytradingmarketplace");

  let email = req.body.email
  let candyPayload = {
    $set: {
      email: email,
      candy: req.body.candy
    }
  }

  let emailQuery = { email: email };

  db_connect
    .collection("stashes")
    .findOne(emailQuery, function (err, result) {
      if (err) throw err;

      let id = JSON.stringify(result["_id"]).split('"')[1];

      db_connect
        .collection("stashes")
        .updateOne({ _id: ObjectId(id) }, candyPayload, function (err, res) {
          if (err) throw err;
          console.log("1 stash updated");
        });
      res.json(result);
    });
});

// endpoint to get all stashes across all users.
apiRoutes.route("/api/get/stashes").get(function (req, res) {
  let db_connect = dbo.getDb("candytradingmarketplace");

  db_connect
    .collection("stashes")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });

});

apiRoutes.route("/api/send/trade").post(function (req, res) {

});

apiRoutes.route("/api/accept/trade").post(function (req, res) {

});

apiRoutes.route("/api/decline/trade").post(function (req, res) {

});



module.exports = apiRoutes;
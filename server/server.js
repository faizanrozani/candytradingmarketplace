const express = require("express");
const { auth } = require('express-openid-connect');
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL
};

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(require("./routes/api"));
app.use(auth(config));

const dbo = require("./db/conn");

// Updates DB with new users
app.get('/', (req, res) => {
  let userInfo = req.oidc.user;

  if (userInfo) {
    let email = JSON.parse(JSON.stringify(userInfo))["email"];
    let db_connect = dbo.getDb("candytradingmarketplace");
    let emailQuery = { email: email };

    db_connect
      .collection("stashes")
      .findOne(emailQuery, function (err, result) {
        if (err) throw err;

        if (!result) {
          let db_connect = dbo.getDb("candytradingmarketplace");
          let stash = {
            email: email,
            candy: {"Chocolate": 0, "Lollipops": 0, "Gum Drops": 0}
          };

          db_connect
            .collection("stashes")
            .insertOne(stash, function (err, res) {
              if (err) throw err;
            });
        }
      });
  }
  res.sendStatus(200);
  res.redirect("http://localhost:3000");
});

app.post('/callback', (req, res) => {
  res.redirect("http://localhost:3000");
})

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
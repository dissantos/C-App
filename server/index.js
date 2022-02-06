const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  console.log("Teste")
  res.send("Entrou")
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
/*
app
  .route("/things/cars")
  .get((req, res) => {})
  .post((req, res) => {});

app
  .route("/things/cars/:carid")
  .get((req, res) => {})
  .put((req, res) => {});
*/
app.listen(PORT, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Server listening on ${PORT}`);
});

const express = require("express");
const app = express();
const recipes = require("./recipes");

app.get("/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running,");
});

const express = require("express");
const fs = require("fs");
const v = require("./verif");
const app = express();
const PORT = 5500;

app.get("/", v, (req, res) => {
  fs.readFile("./Home.html", "utf-8", (err, data) => {
    err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
  });
});

app.get("/Home", v, (req, res) => {
  fs.readFile("./Home.html", "utf-8", (err, data) => {
    err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
  });
});

app.get("/Service", v, (req, res) => {
  fs.readFile("./Service.html", "utf-8", (err, data) => {
    err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
  });
});

app.get("/Contact", v, (req, res) => {
  fs.readFile("./Contact.html", "utf-8", (err, data) => {
    err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
  });
});

app.listen(PORT, (req, res) => {
  console.log(`server is running : port ${PORT}...`);
});

import express from "express";
import path from "path";
import bodyParser from "body-parser";
import nunjucks from "nunjucks";

const app = express();
app.set("view engine", "html");

import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, "static")));

import {
  getReadingEase,
  countSentences,
  countSyllables,
  countWords,
} from "./readability-checker.js";

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/submit", (req, res) => {
  res.redirect("/");
});

app.post("/submit", (req, res) => {
  res.send(`${getReadingEase(req.body.text)}`);
});

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "index.html"));
  res.render("index.html");
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});

import express from "express";

const app = express();
app.set("view engine", "html");

import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "index.html"));
  res.render("index.html");
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});

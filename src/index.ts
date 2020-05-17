import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.listen(port);

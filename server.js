const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  //   res.send("<h1>Hello From Express</h1>");
  res.sendFile(path.resolve(__dirname) + "/index.html");
});
app.get("/about", (req, res) => {
  //   res.send("<h1>Hello From Express</h1>");
  res.sendFile(path.resolve(__dirname) + "/about.html");
});

app.listen(PORT, () => console.log(`Listening server on Port:${PORT}`));

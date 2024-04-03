const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require("./routes/index");
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname) + "/templates");

console.log(app.get("views"));
app.use(express.static("public"));

// app.use("/en", mainRouter);
app.use(mainRouter);
app.listen(PORT, () => console.log(`Listening server on Port:${PORT}`));

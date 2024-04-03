const router = require("express").Router();
router.get("/", (req, res) => {
  //   res.send("<h1>Hello From Express</h1>");
  res.render("index", {
    title: "My Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My About Page",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.ejs");
});

module.exports = router;

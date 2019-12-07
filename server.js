const express = require("express");
var exphbs = require("express-handlebars");
const app = express();
var router = express.Router();
const brain = require("./node_modules/brain.js");
var hbs = exphbs.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    foo: function() {
      return "FOO!";
    },
    bar: function() {
      return "BAR!";
    }
  }
});

app.engine(
  "handlebars",
  exphbs({
    layoutsDir: __dirname + '/views/layouts/',
    defaultLayout: "index"
  })
);
app.set("view engine", "handlebars");
app.get("/", (req, res) => {
  const head = "This is a dynamic heading";
  res.render("index", {
    head: head
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

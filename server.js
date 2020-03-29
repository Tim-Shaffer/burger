// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

// added the ./ static to allow the image to show
app.use(express.static("./"));

// the public folder static is needed for the css
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

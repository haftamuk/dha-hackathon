var express = require("express"),
  app = express(),
  port = process.env.PORT || 3002;
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// ################## This is included to mock the response ##################
var input = require("./input");
var output = require("./output");
// ################## ################## ################## ##################  ##################

app.get("/", function (req, res) {
  try {
    res.json({
      message: "Success Message",
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/", function (req, res) {
  try {
    console.log("Recieved Message: " + req.body);

    res.json({
      messrecieved: req.body,
      messrecieveed: input,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port);

console.log("Server running http://localhost:" + port);

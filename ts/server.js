var express = require("express"),
  app = express(),
  port = process.env.PORT || 3005;

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

// ################## This is included to mock the response ##################
var input = require("./input");
var output = require("./output");
// ################## ################## ################## ##################  ##################

app.get("/", function (req, res) {
  try {
    res.json({
      message: output,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/", function (req, res) {
  try {
    console.log("Recieved Message: " + req.body);

    res.json({
      message: "Message Recieved",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port);

console.log("Server started! At http://localhost:" + port);
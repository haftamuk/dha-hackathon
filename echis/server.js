var express = require("express"),
    app = express(),
    port = process.env.PORT || 3003;
// ################## This included to mock the response ##################
var result = require("./result");
// ################## ################## ################## ##################  ##################

app.get("/list", function (req, res) {
    try {
        res.json({
            result
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(port);

console.log("Server running http://localhost:" + port + "/list");
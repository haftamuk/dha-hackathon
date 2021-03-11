var express = require("express"),
    app = express(),
    port = process.env.PORT || 3002;
app.get("/list", function (req, res) {
    try {
        res.json({
            message: "Success Message"
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(port);

console.log("Server running http://localhost:" + port + "/list");
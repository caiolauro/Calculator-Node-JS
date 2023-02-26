const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    console.log(__dirname + "/index.html")
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1); 
    var num2 = Number(req.body.num2);
    var result = add(num1, num2)
    res.send("Result: " + result);
});

app.listen("3000", function () {
    console.log("Server is running on port 3000.")
});

function add(num1, num2) {
    return num1 + num2
};
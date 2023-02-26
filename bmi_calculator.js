const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/bmi-calculator', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", function (req, res) {
    var weight = Number(req.body.weight); 
    var height = Number(req.body.height);
    var result = weight / height;
    res.send("Result: " + result);
});

app.listen("3000", function () {
    console.log("Server is running on port 3000.")
});

function add(num1, num2) {
    return num1 + num2
};
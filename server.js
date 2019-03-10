var express = require("express");
var app = express();
var path = require('path');
var friendsList = require("./app/data/friends")

var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/api/friends", function (req, res) {
    return res.json(friendsList.friends);
});

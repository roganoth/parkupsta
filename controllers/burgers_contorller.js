var express = require("express");
var burgers = require("../models/burgers.js");
var router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

router.get("/burgers", function(req, res) {
    burgers.selectAll(function(data) {
        res.json({burgers: data});
    });
});

router.post("/burgers", function (req, res) {
    burgers.createOne([
        ""
    ])
})

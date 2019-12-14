var express = require("express");
var burgers = require("../models/burgers.js");
var router = express.Router();
var path = require("path")

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

router.get("/burgers", function (req, res) {
    burgers.selectAll(function (data) {
        res.json({ burgers: data });
    });
});

router.post("/burgers", function (req, res) {
    burgers.createOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burgers.updateOne({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.json({ id: req.params.id });
        }
    });
});

router.delete("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burgers.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;
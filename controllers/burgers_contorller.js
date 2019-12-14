var express = require("express");
var burgers = require("../models/burgers.js");
var router = express.Router();

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
        ""
    ]);
});

router.put("/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burgers.updateOne({
        devoured: true
    }, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.json({ id: req.params.id });
        }
    });
});

module.exports = router;
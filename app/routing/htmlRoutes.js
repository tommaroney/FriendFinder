const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/survey", (req, res) => {
    console.log(path.join(path.normalize(__dirname + "/.."), "views", "survey.html"));
    res.sendFile(path.join(path.normalize(__dirname + "/.."), "views", "survey.html"));
});

router.get("/*", (req, res) => {
    res.sendFile(path.normalize(path.normalize(__dirname + "/.."), "views", "home"));
});

module.exports = router;
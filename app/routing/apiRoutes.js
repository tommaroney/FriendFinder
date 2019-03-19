const path = require("path");
const express = require("express");
const friends = require("../data/friends.js");

const router = express.Router();

router.get("/friends", (req, res) => {
    friends.all()
        .then((response) => res.send(response));
});

router.post("/friends", (req, res) => {
    friends.add(req.body)
        .then(
        (response) => res.send(response), 
        (reason) => res.send(reason));
});

module.exports = router;
const express = require("express");
const router = express.Router();
const { getUsers } = require("../user_model");

router.get("/", (req, res) => {
    console.log("in get users");
    getUsers()
        .then(response => {
            res.status(200).send(response)
        })
        .catch((error) => {
            res.status(500).send(error);
        })
})

module.exports = router;
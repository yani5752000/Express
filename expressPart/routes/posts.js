const express = require("express");
const router = express.Router();
const { getPosts, addPost, deletePost } = require("../post_model");

router.get("/", (req, res) => {
    getPosts()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => res.status(500).send(error));
})

router.post("/new", (req, res) => {
    console.log("in post/new req.body.contnet is: ", req.body.content);
    const {content} = req.body;
    addPost({content})
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.status(500).send(error);
        })
})

router.delete("/delete/:id", (req, res) => {
    deletePost(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

module.exports = router;
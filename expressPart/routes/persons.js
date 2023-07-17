const express = require("express");
const router = express.Router();
const { getPersons, addPreson, deletePerson } = require("../person_model")

router.get("/", (req, res) => {
    getPersons()
        .then(response => {
            console.log("type of response: ", typeof response);
            console.log("response in server: ", response);
            res.status(200).send(response);
            //res.json(response);
        })
        .catch(error => res.status(500).send(error));
})

router.post("/new", (req, res) => {
    console.log("got in post persons/new");
    console.log("typeof req.body: ", typeof req.body);
    console.log("req.body: ", req.body);
    const {name, email} = req.body;
    console.log("namd and email: ", name + " " + email);
    addPreson({name, email})
        .then((result) => {
            res.status(200).send(result);
            console.log("gggod");
        })
        .catch((error) => {
            res.status(500).send(error);
        })
})

router.delete("/delete/:id", (req, res) => {
    deletePerson(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})


module.exports = router;
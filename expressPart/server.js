const express = require("express");
const {getPersons, addPreson} = require("./person_model");

const cors = require("cors");

const app = express();
const PORT = 8080;

const obj = {
    a: 1,
    b: 2
}

const arr = [100, 200];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("here is server part");
})

app.get("/obj", (req, res) => {
    res.json(obj);
})

app.get("/arr", (req, res) => {
    res.json(arr);
})

app.get("/persons", (req, res) => {
    getPersons()
        .then(response => {
            console.log("type of response: ", typeof response);
            console.log("response in server: ", response);
            res.status(200).send(response);
            //res.json(response);
        })
        .catch(error => res.status(500).send(error));
})

app.post("/persons/new", (req, res) => {
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

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
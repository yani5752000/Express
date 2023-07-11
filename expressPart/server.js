const express = require("express");
const {getPersons, addPreson} = require("./person_model");

const app = express();
const PORT = 8080;

const obj = {
    a: 1,
    b: 2
}

const arr = [100, 200];

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

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

app.post("persons/new", (req, res) => {
    const {name, email} = req.body;
    addPreson({name, email})
        .then((result) => {
            res.status(200).sendJ(result);
        })
        .catch((error) => {
            res.status(500).send(error);
        })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
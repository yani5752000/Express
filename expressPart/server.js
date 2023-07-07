const express = require("express");
const app = express();
const PORT = 8080;

const obj = {
    a: 1,
    b: 2
}

app.get("/", (req, res) => {
    res.send("here is server part");
})

app.get("/json", (req, res) => {
    res.json(obj);
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
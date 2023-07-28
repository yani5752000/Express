const express = require("express");
const {getPersons, addPreson, deletePerson, createTablePosts} = require("./person_model");

const cors = require("cors");

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
const personsRouter = require("./routes/persons");
const postsRouter = require("./routes/posts");
const registerRouter = require("./routes/register");
const usersRouter = require("./routes/users");

app.use("/persons", personsRouter);
app.use("/posts", postsRouter);
app.use("/register", registerRouter);
app.use("/users", usersRouter);

const obj = {
    a: 1,
    b: 2
}

const arr = [100, 200];

app.get("/", (req, res) => {
    res.send("here is server part");
})

app.get("/obj", (req, res) => {
    res.json(obj);
})

app.get("/arr", (req, res) => {
    res.json(arr);
})

// app.get("/persons", (req, res) => {
//     getPersons()
//         .then(response => {
//             console.log("type of response: ", typeof response);
//             console.log("response in server: ", response);
//             res.status(200).send(response);
//             //res.json(response);
//         })
//         .catch(error => res.status(500).send(error));
// })

// app.post("/persons/new", (req, res) => {
//     console.log("got in post persons/new");
//     console.log("typeof req.body: ", typeof req.body);
//     console.log("req.body: ", req.body);
//     const {name, email} = req.body;
//     console.log("namd and email: ", name + " " + email);
//     addPreson({name, email})
//         .then((result) => {
//             res.status(200).send(result);
//             console.log("gggod");
//         })
//         .catch((error) => {
//             res.status(500).send(error);
//         })
// })

// app.delete("/persons/delete/:id", (req, res) => {
//     deletePerson(req.params.id)
//         .then((result) => {
//             res.status(200).send(result);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

app.post("/register", (req, res) => {
    const {email, password} = req.body;
    console.log("in server: ", email);
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    createTablePosts()
        .then(result => console.log(result))
        .catch(error => console.log(error))
})
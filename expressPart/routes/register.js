const express = require("express");
const router = express.Router();
const { registerUser, findUserByEmail } = require("../user_model")

router.post("/", (req, res) => {
    console.log("in register");
    const { email, password } = req.body;
    //const check = findUserByEmail(email); 
    registerUser({ email, password })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => console.log(error))

})

module.exports = router;
const express = require("express");
const router = express.Router();
import { registerUser, findUserByEmail } from "../user_model";

router.post("/", (req, res) => {
    const { email, password } = req.body;
    //const check = findUserByEmail(email); 
    registerUser({ email, password })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => console.log(error))

})

module.exports = router;
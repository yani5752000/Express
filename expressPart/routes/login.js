const express = require("express");
const router = express.Router();
//import { registerUser, findUserByEmail } from "../user_model";
const { findUserByEmail } = require("../user_model")

router.get("/", (req, res) => {
    if(req.session.email) {
        return res.json({valid: true, email: req.session.email});
    }
    return res.json({valid: false});
})

router.post("/", (req, res) => {
    const { email, password } = req.body;
    findUserByEmail(email)
        .then(result => {
            console.log("in postlogin: ", result);
            if(result.length > 0) {
                req.session.email = result[0].email;
                return res.json({Login: true, userEmail: req.session.email});
            } else {
                return res.json({Login: false});
            }
        })  
        .catch(error => {
            console.log(error);
        })
})

module.exports = router;
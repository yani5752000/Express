const express = require("express");
const router = express.Router();
import { registerUser, findUserByEmail } from "../user_model";

module.exports = router;
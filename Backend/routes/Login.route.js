const express = require("express")
const router = express.Router();
const login = require ("../controller/Login.controller")
router.post("/login", login.signin);
module.exports = router;
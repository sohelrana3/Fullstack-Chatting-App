const express = require("express");
const router = express.Router();
// import controller
const LoginController = require("../controller/LoginController");

// create router
router.post("/login", LoginController);

module.exports = router;

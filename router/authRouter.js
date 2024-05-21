const express = require("express");
const router = express.Router();
const validator = require("express-joi-validation").createValidator({});
const Joi = require("joi");
// import controller
const authController = require("../controller/authController");


//joi validator

const regstration = Joi.object({
  username: Joi.string().min(3).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(15).required(),
});

// create router
router.post("/login", authController.controller.LoginController);
router.post(
  "/regstration",
  validator.body(regstration),
  authController.controller.registrationController
);

module.exports = router;

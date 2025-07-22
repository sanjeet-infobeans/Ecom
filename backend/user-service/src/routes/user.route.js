const express = require("express");
const { authController } = require("../controllers");
const { authValidator } = require("../validators");
const { joiBodyMiddleware } = require("../middlewares/joi.middleware");
const router = express.Router();

router.post(
  "/register",
  joiBodyMiddleware(authValidator.registerSchema),
  authController.registerUser
);

router.post(
  "/login",
  joiBodyMiddleware(authValidator.loginSchema),
  authController.authUser
);

router.post("/logout", authController.logoutUser);

module.exports = router;

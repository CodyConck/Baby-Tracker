const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

// each route below uses functions from userController
// add user
router.post("/", registerUser);
// login user
router.post("/login", loginUser);
//get user data
router.get("/me", getMe);

module.exports = router;

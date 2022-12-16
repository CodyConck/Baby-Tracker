const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// each route below uses functions from userController
// add user
router.post("/", registerUser);
// login user
router.post("/login", loginUser);
//get user data
router.get("/me", protect, getMe);

module.exports = router;

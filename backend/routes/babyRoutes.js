const express = require("express");
const router = express.Router();
const {
  getBabies,
  setBaby,
  updateBaby,
  deleteBaby,
} = require("../controllers/babyController");

const { protect } = require("../middleware/authMiddleware");

// consolidate get and post routes below like this
router.route("/").get(protect, getBabies).post(protect, setBaby);

//  GET route to get baby info using the getBabies function from babyController
// router.get("/", getBabies);
//  POST allows us to create baby using the setBaby function from babyController
// router.post("/", setBaby);

// consolidate put and delete routes below like this
router.route("/:id").put(protect, updateBaby).delete(protect, deleteBaby);

// PUT allows us to update baby, needs id. uses updateBaby from babyController
// router.put("/:id", updateBaby);
// DELETE allows us to delete baby, needs id. uses deleteBaby from babyController
// router.delete("/:id", deleteBaby);

module.exports = router;

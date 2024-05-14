const express = require("express");
const router = express.Router(); // Create router object from express
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController"); // Import functions from goalController
const { set } = require("mongoose");

// Routes setup
// The following routes are relative to /api/goals

// router.get("/", getGoals);
// router.post("/", setGoals);
router.route("/").get(getGoals).post(setGoals); // Replacing the above two lines with this line

// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal); // Replacing the above two lines with this line

module.exports = router; // Export router object

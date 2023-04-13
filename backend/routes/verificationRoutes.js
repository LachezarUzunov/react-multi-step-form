const express = require("express");
const { generate, verify } = require("../controllers/userController");
const { protect } = require("../middleware/protect");

const router = express.Router();

// Generate and verify token
router.post("/", generate);
router.post("/verify", protect, verify);

module.exports = router;

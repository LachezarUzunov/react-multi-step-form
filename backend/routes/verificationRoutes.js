const express = require("express");
const { generate, verify } = require("../controllers/userController");

const router = express.Router();

// Generate and verify token
app.post("/", generate);
app.post("/verify", verify);

const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const generate = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { mobileNum, emailAddress } = req.body;

  const randomNums = Math.floor(100000 + Math.random() * 900000);

  res.status(201).json({
    randomNums,
    token: generateToken(randomNums),
  });
});

module.exports = {
  generate,
};

// Generate token
const generateToken = (randomNums) => {
  return jwt.sign({ randomNums }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

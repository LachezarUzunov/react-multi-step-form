const jwt = require("jsonwebtoken");

const generate = (req, res) => {
  const { mobileNum, emailAddress } = req.body;

  if (
    mobileNum.length !== 10 ||
    emailAddress.length < 5 ||
    !emailAddress.includes("@")
  ) {
    throw new Error("Невалидни данни");
  }

  const randomNums = Math.floor(100000 + Math.random() * 900000);

  res.status(201).json({
    randomNums,
    token: generateToken(randomNums),
  });
};

const verify = (req, res, next) => {
  const sessionCode = req.sessionCode;
  const submittedCode = req.body.code;
  console.log(sessionCode);
  console.log(submittedCode);

  if (sessionCode != submittedCode) {
    res.status(403);
    throw new Error("Not Authorized");
  } else {
    res.status(200).json({ message: "Sucess" });
  }
};

module.exports = {
  generate,
  verify,
};

// Generate token
const generateToken = (randomNums) => {
  return jwt.sign({ randomNums }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

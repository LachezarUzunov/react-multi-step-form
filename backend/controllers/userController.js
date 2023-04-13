const jwt = require("jsonwebtoken");

const generate = (req, res) => {
  console.log(req.body);
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
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      console.log(token);
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
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

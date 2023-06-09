const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

const { protect } = require("./middleware/protect");
const PORT = process.env.PORT || 5000;

const app = express();

// Allows to send raw json, body parser
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

// ROUTES
app.use("/api", require("./routes/verificationRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    mobileNum: {
      type: Number,
      required: [true, "Please add a valid Mobile no."],
    },
    email: {
      type: String,
      required: [true, "Please add valid email id"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  rol : { type: String, default: "user"}
});

const User = mongoose.model("user", userSchema);

module.exports = User;
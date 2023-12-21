// space user model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  planetOfOrigin: { type: String, required: true },
  avatar: { type: String, required: true},
  result: { type: Number, default: null },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// space user model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  planetOfOrigin: String,
  avatar: img,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

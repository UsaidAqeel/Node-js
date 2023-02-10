const mongoose = require("mongoose");

// This is the mongoDB schema:
const userSchema = mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  userEmail: { type: String, required: true, unique: true },
  token: { type: String, required: true },
});

const userModel = mongoose.model("users", userSchema);
module.export = userModel;

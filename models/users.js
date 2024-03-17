const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/parvahak");

const userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  username: String,
  password: String,
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);

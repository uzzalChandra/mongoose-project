const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  id: {
    type: String,
    require: true
  },
});

module.exports = mongoose.model("User", userSchema)
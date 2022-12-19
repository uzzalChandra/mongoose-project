const { default: async } = require("async");
const { v4: uuid4 } = require("uuid");
const { findOne } = require("../models/user.model");
const User = require("../models/user.model");

const allUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch {
    res.status(500).send(err.message);
  }
};

const gatUser = async (req, res) => {
  try {
    const user1 = await User.findOne({ id: req.params.id });
    res.status(200).json(user1);
  } catch {
    res.status(500).send(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuid4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "Delete user" });
  } catch {
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user1 = await User.findOne({ id: req.params.id });
    user1.name = req.body.name,
    user1.age = Number(req.body.age),
    await user1.save();
    res.status(200).json(user1);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { allUser, gatUser, createUser, updateUser, deleteUser };

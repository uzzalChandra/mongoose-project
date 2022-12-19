const express = require("express");
const { allUser, createUser, gatUser, updateUser, deleteUser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", allUser);
router.post("/", createUser);
router.get("/:id", gatUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
const express = require("express");
const { registerUser, loginUser } = require("../controllers/Auth");

const router = express.Router();

router.post("/", loginUser);
router.post("/register", registerUser);

module.exports = router;

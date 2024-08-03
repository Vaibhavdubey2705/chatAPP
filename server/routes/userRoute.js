const express = require("express");
const {registeredUser, loginUser, findUser, Users } = require("../controllers/userController.js");
const router = express.Router();

router.post("/register" , registeredUser);
router.post("/login" , loginUser);
router.get("/find/:userId" , findUser);
router.get("/find/Users" , Users);
module.exports = router;
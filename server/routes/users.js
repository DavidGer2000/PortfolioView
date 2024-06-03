const express = require("express");
const router = express.Router();
const { auth } = require("../midllewares/auth");
const {signUp, login, authProfile, logout} = require("../controler/authController");

router.get("/", async (req, res) => {
  res.json({ msg: "Users end point" })
})

router.post("/signUp", signUp);
router.post('/login', login);
router.get("/authProfile", auth, authProfile);
router.get("/logout", logout);

module.exports = router;
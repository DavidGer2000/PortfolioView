const express = require("express");
const router = express.Router();
const { auth } = require("../midllewares/auth");
const { getTradingData } = require("../controler/tradingData");

router.get("/trading-data", auth, getTradingData)

module.exports = router;
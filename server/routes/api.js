const express = require("express");
const router = express.Router();
const { auth } = require("../midllewares/auth");
const { getIndiceData } = require("../controler/taseApi");

router.get("/indice-data", getIndiceData)

module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/testing", (req, res) => {
  res.send("SGAIot devices.js");
});

module.exports = router;
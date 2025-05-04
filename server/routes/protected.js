const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/verifyToken"); // adjust path if needed

router.get("/api/dashboard", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome to the protected dashboard!",
    user: req.user,
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//    Login/Landing Page
//    Get
router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

//    Dashboard
//    Get/ dashboard
router.get("/dashboard", ensureAuth, (req, res) => {
  console.log(req.user);
  res.render("dashboard", {
    name: req.user.firstName,
  });
});

//    Routes

module.exports = router;

const express = require("express");
const router = express.Router();




router.get("/", (req, res) => {
  res.render("home");
});

router.get("/options", (req, res) => {
  res.render("options");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/trucksignup", (req, res) => {
  res.render("trucksignup");
});

router.get("/clientsignup", (req, res) => {
  res.render("clientsignup");
});

module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("passport");
const userModel = require("../models/users");
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

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
// router.get("/profile",isLoggedIn, (req, res) => {
//   res.send("profile page");
// });

// router.post("/signup", function (req, res) {
//   const userdata = new userModel({
//     fname: req.body.fname,
//     lname: req.body.lname,
//     username: req.body.username,
//     password: req.body.password,
//   });
//   userModel
//     .register(userdata, req.body.password)
//     .then(function (registereduser) {
//       passport.authenticate("local")(req, res, function () {
//         console.log(req.user.username);
//         res.redirect("/profile");
//       });
//     });
// });

// router.post(
//   "/signin",
//   passport.authenticate("local", {
//     successRedirect: "/profile",
//     failureRedirect: "/",
//   }),
//   function (req, res) {
//     res.render("profile");
//   }
// );

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/");
// }

// router.get("/logout", function (req, res, next) {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/");
//   });
// });

module.exports = router;

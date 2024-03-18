const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/userModels");
const createDB = require("../config/db");
const bcrypt = require("bcryptjs");

createDB.sync().then(() => {
  console.log("DB is running");
}).catch(err => {
  console.error("Error syncing database:", err);
});

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

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/clientsignup", (req, res) => {
  res.render("clientsignup");
});

const {
  validateFname,
  validateLname,
  validateEmail,
  validatePassword,
} = require("../utils/validators");

router.post("/signup", async (req, res) => {
  try {
  
    const { fname, lname, email, password } = req.body;
    const userExist = await User.findOne({
      where: {
        email,
      },
    });

    if (userExist) {
      return res.send("User already exists");
    }

    if (!validateFname(fname) || !validateLname(lname) || !validateEmail(email) || !validatePassword(password)) {
      return res.send("Invalid input data");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const saveToDB = {
      fname,
      lname,
      email,
      password: hashedPassword,
    };

    const createdUser = await User.create(saveToDB);
    // res.send("Success");
    res.redirect('/profile')
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
 
    const userExists = await User.findOne({ where: { email } });

    if (!userExists) {
      res.send("user does not exists");
    }
    const hashedPassword = userExists.password;
  
    const passMatch = await bcrypt.compare(
      password,
     hashedPassword
    );
    if (!passMatch) {
      res.send("password mismatch");
    }
    // res.send("success");
    res.redirect('/profile')
  } catch (e) {
    console.log(e);
  }
});



module.exports = router;
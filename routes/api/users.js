const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load Services
const mailer = require("../../services/mailer");
const generatePassword = require("../../services/generatePassword");
// Load Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User Model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ message: "Test Users Successfully!" });
});

// @route   POST api/users/register
// @desc    register user
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        password: generatePassword(10).toString(),
      });

      newUser.save().then((user) => {
        res.json(user);
        mailer.sendMail({
          from: "kolotushins@gmail.com",
          to: newUser.email,
          subject: "Пароль для входа в Pandora",
          html: `Для того чтобы войти в Pandora Вам потребуется пароль, вот: ${newUser.password}`,
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    if (password !== user.password) {
      errors.password = "Password incorrect";
      return res.status(404).json(errors);
    } else {
      // User Matched
      const payload = { id: user.id, name: user.name }; // Crete JWT Payload

      // Sign Token
      jwt.sign(
        payload,
        process.env.SECRET_OR_KEY,
        { expiresIn: 3600 },
        (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        }
      );
    }
  });
});

// @route   POST api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;

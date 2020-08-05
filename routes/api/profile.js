const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateServiceInput = require("../../validation/service");
const validateProfileInput = require("../../validation/profile");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// @route   GET api/profile/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ message: "Test Profile Successfully!" });
});

// @route   GET api/profile
// @desc    Tests users route
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Private
router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate("user", ["name", "avatar"])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch((err) => res.status(404).json({ profile: "There are no profiles" }));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public
router.get("/handle/:handle", (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public
router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch((err) => {
      res.status(404).json({ profile: "There is no profile for this user" });
    });
});

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Chack Validation
    if (!isValid) {
      // return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    // if (req.body.password) profileFields.user.password = req.body.password;

    // Payment Methods
    profileFields.social = {};
    if (req.body.visa) profileFields.social.visa = req.body.visa;
    if (req.body.bitcoin) profileFields.social.bitcoin = req.body.bitcoin;
    if (req.body.qiwi) profileFields.social.visa = req.body.visa;
    if (req.body.yandex) profileFields.social.yandex = req.body.yandex;

    Profile.findOne({ user: req.user.id }).then((profile) => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        )
          .then((profile) => res.json(profile))
          .catch((err) => res.json(err));

        // User.findOneAndUpdate({
        //   password: req.body.password,
        // })
        //   .then((password) => res.json(password))
        //   .catch((err) => res.json(err));
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle })
          .then((profile) => {
            if (profile) {
              errors.handle = "That handle already exists";
              res.status(400).json(errors);
            }

            // Save Profile
            new Profile(profileFields)
              .save()
              .then((profile) => res.json(profile))
              .catch((err) => res.json(err));
          })
          .catch((err) => res.json(err));
      }
    });
  }
);

// @route   POST api/profile/service
// @desc    Add service to profile
// @access  Private
router.post(
  "/service",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateServiceInput(req.body);

    // Chack Validation
    if (!isValid) {
      // return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then((profile) => {
      // Create
      const newService = {
        title: req.body.title,
        content: req.body.content,
        categories: req.body.categories.split(","),
      };

      // Add to service array
      profile.services.unshift(newService);

      profile.save().then((profile) => res.json(profile));
      // .catch((err) => res.json(err));
    });
  }
);

// @route   DELETE api/profile/service/:service_id
// @desc    Delete experience from profile
// @access  Private
router.delete(
  "/service/:service_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        // Get remove index
        const removeIndex = profile.services
          .map((item) => item.id)
          .indexOf(req.params.service_id);

        // Splice out of array
        profile.services.splice(removeIndex, 1);

        // Save
        profile.save().then((profile) => res.json(profile));
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;

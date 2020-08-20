const express = require("express");
const router = express.Router();

const slugify = require("slugify");
const passport = require("passport");

const { errorHandler } = require("../../helpers/dbErrorHandler");

// Load City Model
const City = require("../../models/City");

// @route   POST api/city
// @desc    Create city
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { name } = req.body;
    let slug = slugify(name).toLowerCase();

    let city = new City({ name, slug });

    city.save((err, data) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler(err),
        });
      }

      res.send(data);
    });
  }
);

// @route   GET api/city
// @desc    GET cities
// @access  Public
router.get("/", (req, res) => {
  City.find({}).exec((err, data) => {
    if (err) {
      res.status(400).send({
        error: errorHandler(err),
      });
    }

    res.send(data);
  });
});

// @route   GET api/city/:slug
// @desc    GET slug cities
// @access  Public
router.get("/:slug", (req, res) => {
  const slug = req.params.slug.toLowerCase();

  City.findOne({ slug }).exec((err, city) => {
    if (err) {
      return res.status(400).send({
        error: errorHandler(err),
      });
    }

    res.send(city);
  });
});

// @route   DELETE api/city/:slug
// @desc    DELETE slug cities
// @access  Private
router.delete(
  "/:slug",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const slug = req.params.slug.toLowerCase();

    City.findOneAndRemove({ slug }).exec((err, data) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler(err),
        });
      }

      res.send({
        message: "City deleted successfully",
      });
    });
  }
);

module.exports = router;

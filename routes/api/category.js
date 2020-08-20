const express = require("express");
const router = express.Router();

const slugify = require("slugify");
const passport = require("passport");

const { errorHandler } = require("../../helpers/dbErrorHandler");

// Load Category Model
const Category = require("../../models/Category");

// @route   POST api/categopry
// @desc    Create category
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { name } = req.body;
    let slug = slugify(name).toLowerCase();

    let category = new Category({ name, slug });

    category.save((err, data) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler(err),
        });
      }

      res.send(data);
    });
  }
);

// @route   GET api/categopry
// @desc    GET categories
// @access  Public
router.get("/", (req, res) => {
  Category.find({}).exec((err, data) => {
    if (err) {
      res.status(400).send({
        error: errorHandler(err),
      });
    }

    res.send(data);
  });
});

// @route   GET api/categopry/:slug
// @desc    GET slug categories
// @access  Public
router.get("/:slug", (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Category.findOne({ slug }).exec((err, category) => {
    if (err) {
      return res.status(400).send({
        error: errorHandler(err),
      });
    }

    res.send(category);
  });
});

// @route   DELETE api/categopry/:slug
// @desc    DELETE slug categories
// @access  Private
router.delete(
  "/:slug",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Category.findOneAndRemove({ slug }).exec((err, data) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler(err),
        });
      }

      res.send({
        message: "Category deleted successfully",
      });
    });
  }
);

module.exports = router;

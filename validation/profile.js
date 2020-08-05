const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  // data.password = !isEmpty(data.password) ? data.password : "";
  // data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.handle)) {
    errors.handle = "Handle needs to between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  // if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
  //   errors.password = "Password must be at least 6 characters";
  // }

  // if (Validator.isEmpty(data.password2)) {
  //   errors.password2 = "Confirm Password field is required";
  // }

  // if (!Validator.equals(data.password, data.password2)) {
  //   errors.password2 = "Password must match";
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

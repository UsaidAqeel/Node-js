// Joi is the validator
const Joi = require("joi");

// This validator object is use for the validation;
// userAuthValidator are the validator for matching every property and their value and checking the dependencies like string etc;

const validator = {
  // userAuthValidatorin this, we match three properties and their type & it's required, etc;
  userAuthValidator: Joi.object({
    userName: Joi.string().required(),
    userEmail: Joi.string().required(),
    token: Joi.string(),
  }),
};

module.exports = validator;

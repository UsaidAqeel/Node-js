const { getResponsesuccess, errorResponse } = require("../utils/response");
const userModel = require("../models/user.schema");
const validator = require("../validator/userAuth.validator");

const userAuthController = {
  userloginController: (req, res) => {
    try {
      const { error, value } = validator.userAuthValidator.validate(req.body);
      if (error) {
        return errorResponse(404, error.message, res);
      }
      getResponsesuccess(200, value, res);
    } catch {
      return errorResponse(404, "user login Controller error", res);
    }
  },
};

module.exports = userAuthController;

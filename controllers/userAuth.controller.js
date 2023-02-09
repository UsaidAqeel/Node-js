const { getResponseSucces } = require("../utils/response");

const userAuthController = {
  userloginController: (req, res) => {
    getResponseSucces(200, "User Match", res);
  },
};

module.exports = userAuthController

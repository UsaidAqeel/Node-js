const { errorResponse } = require("../utils/response");
const jwt = require("jsonwebtoken");

// Example dammuy user Data
const user = [
  {
    userName: "Usaid",
    fatherName: "Akeel",
    id: 1,
  },
  {
    userName: "Usaid1",
    fatherName: "Akeel",
    id: 1,
  },
];

const userAuthMiddlewear = {
  userLoginMiddlewear: (req, res, next) => {
    try {
      const reqBody = req.body;
      const findUser = user.filter((val) => val.userName == reqBody.name);
      if (findUser.length > 0) {
        return next();
      }
      errorResponse(500, "not match", res);
    } catch {
      errorResponse(500, "not match", res);
    }
  },
};

module.exports = userAuthMiddlewear;

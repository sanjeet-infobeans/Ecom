"use strict";
const { constants } = require("../config");
module.exports = (req, res, next) => {
  res.success = (data) => {
    return res.status(200).json({ success: true, ...data });
  };
  res.serverError = (code = 500, message = "Internal Server Error") => {
    return res.status(code).json({ success: false, message, code });
  };
  res.unauthorized = () =>
    res.status(200).json({
      success: false,
      message: constants.error.auth.unauthorized,
      code: 400,
    });
  next();
};

"use strict";
const bcryptConfig = require("./bcrypt.config");
const jwtConfig = require("./jwt.config");
const constants = require("./constants");
console.log(jwtConfig);
module.exports = {
  constants,
  bcryptConfig,
  jwtConfig,
};

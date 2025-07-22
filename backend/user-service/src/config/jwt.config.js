"use strict";
module.exports = {
  issuer: process.env.APP_DOMAIN,
  audience: process.env.APP_DOMAIN,
  expiresIn: "30d",
  secretKey: process.env.JWT_SECRET_KEY,
};

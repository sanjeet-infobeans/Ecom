const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config");
const generateToken = (res, userId) => {
  console.log(jwtConfig.secretKey);
  const token = jwt.sign({ userId }, jwtConfig.secretKey, {
    expiresIn: jwtConfig.expiresIn,
    audience: jwtConfig.audience,
    issuer: jwtConfig.issuer,
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, jwtConfig.secretKey, {
    expiresIn: jwtConfig.expiresIn,
    audience: jwtConfig.audience,
    issuer: jwtConfig.issuer,
  });
};

module.exports = { generateToken, verifyToken };

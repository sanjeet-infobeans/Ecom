const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email is invalid",
    "string.empty": "Email cannot be an empty",
    "any.required": "Email is required",
  }),
  password: Joi.string().required(),
});

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required().messages({
    "string.base": "Email is invalid",
    "string.empty": "Email cannot be an empty",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required(),
});

const updateProfileSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  password: Joi.string().min(6).required().optional(),
});

module.exports = { loginSchema, registerSchema, updateProfileSchema };

// validators/userValidator.js
const Joi = require('joi');

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  city: Joi.string().required(),
  zipCode: Joi.string().required()
});

const updateUserSchema = Joi.object({
  email: Joi.string().email(),
  name: Joi.string(),
  age: Joi.number().integer(),
  city: Joi.string(),
  zipCode: Joi.string()
});

const validateCreateUser = (data) => createUserSchema.validateAsync(data);
const validateUpdateUser = (data) => updateUserSchema.validateAsync(data);

module.exports = { validateCreateUser, validateUpdateUser };

const joi = require('joi');

module.exports = {
  request: joi.object().options({ abortEarly: false }).keys({
    email: joi.string().email().required(),
    password: joi.string().required()
  })
};

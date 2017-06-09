const joi = require('joi');

module.exports = (data, schema) =>
  joi.validate(data, schema, (err) =>
    err ?
      err.details.map(error => error.message) :
      null
  );

const Joi = require('joi');
const { errorWrapper, RequestError } = require('..');

const schema = Joi.object({
  _id: Joi.any(),
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  origin_description: Joi.string().required(),
  superpowers: Joi.string().required(),
  catch_phrase: Joi.string().required(),
  images: Joi.any(),
});

const validateData = async (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    throw RequestError(400, error.message);
  }

  next();
};

module.exports = errorWrapper(validateData);

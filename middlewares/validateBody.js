const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const body = req.body;
    const bodyLength = Object.keys(body).length;

    if (bodyLength === 0) {
      throw HttpError(400, "missing fields");
    }

    const { error } = schema.validate(req.body);

    if (error) {
      next(
        HttpError(
          400,
          `missing required ${error.details[0].context.label} field`
        )
      );
    }
    next();
  };
  return func;
};

module.exports = validateBody;

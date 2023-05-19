const contacts = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await contacts.getContactById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const add = async (req, res) => {
  // const { error } = addSchema.validate(req.body);

  // if (error) {
  //   throw HttpError(
  //     400,
  //     `missing required ${error.details[0].context.label} field`
  //   );
  // }

  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  const result = await contacts.removeContact(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  // res.status(204).send()
  res.json({
    message: "contact deleted",
  });
};

const updateById = async (req, res) => {
  //   const { error } = addSchema.validate(req.body);

  const body = req.body;
  // console.log(body);

  // // const bodyLength = Object.keys(body).length;
  // // console.log(bodyLength);

  // if (!body) {
  //   throw HttpError(400, "missing fields");
  // }

  //   if (error) {
  //     throw HttpError(
  //       400,
  //       `missing required ${error.details[0].context.label} field`
  //     );
  //   }

  const { id } = req.params;

  const result = await contacts.updateContactsById(id, body);
  console.log(result);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};

const HttpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;

// I1k8tU4JiBK4p2Qz
// 0506167197more

// Nastia
// KLKMDdQbJdeAwL0A

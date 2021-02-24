module.exports = (error, request, reply) => {
  const { statusCode } = error;
  if (statusCode >= 500) {
    request.log.error(error);
  } else if (statusCode >= 400) {
    request.log.info(error);
  } else {
    request.log.error(error);
  }

  if (Array.isArray(error.details) && error.details.length > 0) {
    return reply.send({
      status: error.status,
      errors: error.details,
    });
  }

  return reply.send({
    errors: [
      {
        message: error.message || error,
      },
    ],
  });
};

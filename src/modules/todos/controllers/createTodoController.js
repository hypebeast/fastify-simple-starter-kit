async function create(fastify, request) {
  const { todoService } = fastify;
  const { body } = request;

  const result = await todoService.create(body);

  return { content: result };
}

module.exports = create;

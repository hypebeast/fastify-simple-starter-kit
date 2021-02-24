async function fetchAll(fastify) {
  const { todoService } = fastify;

  const todos = await todoService.findAll();

  return { content: todos };
}

module.exports = fetchAll;

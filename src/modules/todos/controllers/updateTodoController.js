async function update(fastify, request) {
  const { todoService } = fastify;
  const { todoId } = request.params;
  const { body } = request;

  const todo = await todoService.update(todoId, body);

  return { content: todo };
}

module.exports = update;

async function deleteTodo(fastify, request) {
  const { todoService } = fastify;
  const { todoId } = request.params;

  await todoService.remove(todoId);

  return {};
}

module.exports = deleteTodo;

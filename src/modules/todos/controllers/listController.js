async function list(fastify, request, reply) {
  return reply.view('todos/index.njk');
}

module.exports = list;

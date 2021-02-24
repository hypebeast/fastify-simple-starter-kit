module.exports = async function (fastify) {
  fastify.get('/', { schema: { tags: ['X-HIDDEN'] } }, async function (request, reply) {
    return reply.view('home.njk');
  });

  fastify.get('/about', { schema: { tags: ['X-HIDDEN'] } }, async function (request, reply) {
    return reply.view('about.njk');
  });
};

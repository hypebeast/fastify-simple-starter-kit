const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  fastify.addHook('preHandler', (request, reply, done) => {
    reply.locals = {
      url: request.url,
    };

    done();
  });
});

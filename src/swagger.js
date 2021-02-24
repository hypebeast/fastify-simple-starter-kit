function register(fastify) {
  fastify.register(require('fastify-swagger'), {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'fastify-simple-starter-kit',
        description: 'API documentation for fastify-simple-starter-kit',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [{ name: 'todos', description: 'Todo related end-points' }],
    },
    exposeRoute: true,
  });
}

module.exports = register;

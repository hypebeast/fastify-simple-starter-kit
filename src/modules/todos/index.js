const plugins = require('./plugins');
const routes = require('./routes');

module.exports = async function (fastify) {
  fastify.register(plugins);
  registerRoutes(fastify);
};

async function registerRoutes(fastify) {
  routes.forEach((route) => fastify.route(route(fastify)));
}

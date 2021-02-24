const createServer = require('./src/server');

module.exports = async function (fastify, options) {
  const server = await createServer(fastify, options);

  server.ready(() => {
    console.log(server.printRoutes());
  });

  return server;
};

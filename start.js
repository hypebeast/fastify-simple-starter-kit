const Fastify = require('fastify');
const isDocker = require('is-docker');
const createServer = require('./src/server');
const config = require('./src/config');

async function run() {
  try {
    const options = {
      ignoreTrailingSlash: true,
      logger: {
        level: config.LOG_LEVEL,
      },
    };
    const fastify = Fastify(options);

    const server = await createServer(fastify, {});

    try {
      if (server.config.ADDRESS) {
        await server.listen(server.config.PORT, server.config.ADDRESS);
      } else if (isDocker()) {
        await server.listen(server.config.PORT, '0.0.0.0');
      } else {
        await server.listen(server.config.PORT);
      }
    } catch (err) {
      server.log.error(err);
      throw err;
    }
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }
}

run();

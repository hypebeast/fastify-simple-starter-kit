const path = require('path');
const app = require('./app');
const errorHandler = require('./exceptions/errorHandler');
const swagger = require('./swagger');

const createServer = async (fastify, options) => {
  const { envPath } = options;

  fastify.register(require('fastify-env'), {
    schema: require('./common/configSchema'),
    dotenv: {
      path: envPath || path.join(__dirname, '..', '.env'),
    },
  });

  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  fastify.register(require('point-of-view'), {
    engine: {
      nunjucks: require('nunjucks'),
    },
    root: path.join(__dirname, 'templates'),
    options: {},
  });

  // Register Swagger
  swagger(fastify);

  fastify.setErrorHandler(errorHandler);

  const pluginOptions = {};

  // Register all services and plugins
  fastify.register(app, pluginOptions);

  return fastify;
};

module.exports = createServer;

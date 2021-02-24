const fp = require('fastify-plugin');
const Knex = require('knex');
const { Model } = require('objection');

module.exports = fp(async function (fastify) {
  if (!fastify.knex) {
    fastify.log.info(`Connecting to database on "${fastify.config.DATABASE_HOST}:${fastify.config.DATABASE_PORT}"...`);

    const db = Knex({
      client: 'pg',
      connection: {
        host: fastify.config.DATABASE_HOST,
        port: fastify.config.DATABASE_PORT,
        user: fastify.config.DATABASE_USER,
        password: fastify.config.DATABASE_PASSWORD,
        database: fastify.config.DATABASE,
      },
      pool: {
        min: 2,
        max: 10,
      },
    });

    Model.knex(db);

    fastify.decorate('knex', db);
  }
});

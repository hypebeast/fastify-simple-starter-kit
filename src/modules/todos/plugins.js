const fp = require('fastify-plugin');

const TodoModel = require('./models/TodoModel');
const TodoService = require('./services/TodoService');

module.exports = fp(async function (fastify) {
  fastify.decorate('TodoModel', TodoModel);
  fastify.decorate('todoService', new TodoService(fastify.TodoModel));
});

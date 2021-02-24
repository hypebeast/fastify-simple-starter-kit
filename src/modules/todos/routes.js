const R = require('ramda');
const listController = require('./controllers/listController');
const createTodoController = require('./controllers/createTodoController');
const fetchAllTodoController = require('./controllers/fetchAllTodoController');
const updateTodoController = require('./controllers/updateTodoController');
const schemas = require('./schemas');
const deleteTodoController = require('./controllers/deleteTodoController');

const list = (fastify) => ({
  method: 'GET',
  url: '/todos',
  schema: { tags: ['X-HIDDEN'] },
  handler: R.partial(listController, [fastify]),
});

const create = (fastify) => ({
  method: 'POST',
  url: '/api/v1/todos',
  schema: schemas.create,
  handler: R.partial(createTodoController, [fastify]),
});

const fetchAll = (fastify) => ({
  method: 'GET',
  url: '/api/v1/todos',
  schema: schemas.fetchAll,
  handler: R.partial(fetchAllTodoController, [fastify]),
});

const update = (fastify) => ({
  method: 'PATCH',
  url: '/api/v1/todos/:todoId',
  schema: schemas.update,
  handler: R.partial(updateTodoController, [fastify]),
});

const deleteTodo = (fastify) => ({
  method: 'DELETE',
  schema: schemas.deleteSchema,
  url: '/api/v1/todos/:todoId',
  handler: R.partial(deleteTodoController, [fastify]),
});

module.exports = [list, create, fetchAll, update, deleteTodo];

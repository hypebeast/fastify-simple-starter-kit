async function send(method, endpoint, data) {
  const opts = {
    method,
    headers: {},
  };

  if (data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  return fetch(endpoint, opts);
}

function getTodoById(id) {
  const found = this.todos.filter((t) => t.id === id);

  if (!found || found.length < 1) {
    throw new Error('now todo found');
  }

  return found[0];
}

async function createTodo(todo) {
  const response = await send('POST', '/api/v1/todos', todo);
  const data = await response.json();

  return data.content;
}

async function addTodo() {
  const todo = await createTodo({ title: this.newTodo, done: false });
  this.todos.push(todo);

  this.newTodo = '';
}

async function fetchAllTodos() {
  const response = await send('GET', 'api/v1/todos');
  const data = await response.json();

  this.todos = data.content;
}

async function toggleTodoDone(id) {
  const todo = this.getTodoById(id);

  await send('PATCH', `/api/v1/todos/${todo.id}`, { done: !todo.done });
  todo.done = !todo.done;
}

async function deleteTodo(id) {
  const todo = this.getTodoById(id);

  await send('DELETE', `/api/v1/todos/${todo.id}`);
  this.todos = this.todos.filter((t) => t.id !== id);
}

function countTodosDone() {
  return this.todos.filter((t) => t.done).length;
}

function countTodos() {
  return this.todos.length;
}

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((t) => !t.done),
  completed: (todos) => todos.filter((t) => t.done),
};

function filteredTodos() {
  return filters[this.visibility](this.todos);
}

function todos() {
  return {
    newTodo: '',
    todos: [],
    visibility: 'all',
    addTodo,
    fetchAllTodos,
    toggleTodoDone,
    deleteTodo,
    countTodosDone,
    countTodos,
    filteredTodos,
    getTodoById,
  };
}

window.todos = todos;

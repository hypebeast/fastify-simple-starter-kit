class TodoService {
  constructor(todoModel) {
    this.todoModel = todoModel;
  }

  async create(todo) {
    return this.todoModel.query().insert(todo).returning('*');
  }

  async findAll() {
    return this.todoModel.query();
  }

  async update(todoId, update) {
    return this.todoModel.query().findById(todoId).patch(update).returning('*');
  }

  async remove(todoId) {
    return this.todoModel.query().deleteById(todoId);
  }
}

module.exports = TodoService;

const { Model } = require('objection');

class TodoModel extends Model {
  static get tableName() {
    return 'todos';
  }
}

module.exports = TodoModel;

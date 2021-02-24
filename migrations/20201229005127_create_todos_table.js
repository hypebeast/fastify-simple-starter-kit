const { onUpdateTrigger } = require('../knexfile');
const tableName = 'todos';

exports.up = function (knex) {
  return knex.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable(tableName, (table) => {
          table.increments('id').primary();
          table.string('title').notNullable();
          table.text('description');
          table.boolean('done').notNullable().defaultTo(false);
          table.timestamps(false, true);
        })
        .then(() => knex.raw(onUpdateTrigger(tableName)))
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e));
    }
  });
};

exports.down = function (knex) {
  return knex.schema.hasTable(tableName).then((exists) => {
    if (exists) {
      return knex.schema
        .dropTable(tableName)
        .then(() => console.log(`Dropped ${tableName} table`))
        .catch((e) => console.error(`Error dropping ${tableName} table`, e));
    }
  });
};

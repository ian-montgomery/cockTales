
exports.up = function(knex) {
  return knex.schema.createTable('drinks', (table) => {
      table.increments('id')
      table.string('name')
      table.string('tale')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('drinks')
};

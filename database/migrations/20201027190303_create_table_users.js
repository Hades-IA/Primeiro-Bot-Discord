
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').unique().notNullable();
        table.string('name').unique().notNullable();
        table.integer('points');
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};

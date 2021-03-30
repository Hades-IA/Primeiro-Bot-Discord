
exports.up = function (knex) {
    return knex.schema.createTable('usersMatchs', function (table) {
        table.increments('id');
        table.integer('result').notNullable();
        table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('usersMatchs');
};

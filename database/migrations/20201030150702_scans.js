
exports.up = function (knex) {
    return knex.schema.createTable('scans', function (table) {
        table.increments('id');
        table.integer('cardId').notNullable();
        table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
        table.text('atklist').notNullable();
        table.text('others').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('scans');
};

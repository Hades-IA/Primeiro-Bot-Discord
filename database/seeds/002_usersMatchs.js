
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('usersMatchs').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersMatchs').insert([
        { user_id: 1, result: 1 },
        { user_id: 2, result: 0 },
        { user_id: 1, result: 1 },
        { user_id: 3, result: 1 }
      ]);
    });
};


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('scans').del()
    .then(function () {
      // Inserts seed entries
      return knex('scans').insert([
        { user_id: 1, cardId: 1, atklist: '', others: '' },
        { user_id: 2, cardId: 2, atklist: '', others: '' },
        { user_id: 3, cardId: 3, atklist: '', others: '' }
      ]);
    });
};

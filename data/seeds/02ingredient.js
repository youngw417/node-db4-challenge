
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, item_name: 'Oz of cheese', count: 10.5, instruction: 'add 10.5 Oz of cheese'},
        {id: 2, item_name: 'grams of flour', count: 100, instruction: 'add 100g flour'},
        {id: 3, item_name: 'cups of milk', count: 2.25, instruction: 'pour 2.25 cups of milk'}
      ]);
    });
};

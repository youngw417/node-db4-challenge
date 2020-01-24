
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rec_ing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rec_ing').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1},
        {id: 2, recipe_id: 1, ingredient_id: 2},
        {id: 3, recipe_id: 2, ingredient_id: 1},
        {id: 4, recipe_id: 2, ingredient_id: 3}
      ]);
    });
};

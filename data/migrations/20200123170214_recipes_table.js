
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('recipe_name', 128)
        .unique()
        .notNullable()
        .index();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('item_name', 128);
        tbl.float('count');
        tbl.text('instruction', 128);

    })
    .createTable('rec_ing', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

    })
};

exports.down = function(knex) {
  
    return knex.schema
    .dropTableIfExists('rec_ing')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};

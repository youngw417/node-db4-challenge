const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

// get Recipes
function getRecipes() {
    return db('recipes')
}

// get ShoppingLists

function getShoppingList(id) {
    return db('rec_ing as RI').select('R.recipe_name', 'I.count', 'I.instruction')
    .join('recipes as R', `R.id`, 'RI.recipe_id')
    .join('ingredients as I', 'I.id', 'RI.ingredient_id')
    .where('R.id', id);
    
}

// get instructions for the given recipe

function getInstructions(id) {
    return db('rec_ing as RI').select('I.instruction')
    .join('ingredients as I', 'RI.ingredient_id', 'I.id')
    .join('recipes as R', 'RI.recipe_id', 'R.id')
    .where('R.id', id)

}
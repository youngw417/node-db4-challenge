const express = require('express');
const Recipes = require('./recipeModel');

const router = express.Router();

module.exports = router;

// Get all recipes
router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch( err => 
        res.status(500).json({
            message: 'Failed to get recipes'
        }))
    
});

// get all ingredients and quantities for a given recipe

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(ingredients => {
        if (ingredients.length) {
            res.status(200).json(ingredients)
        } else {
            res.status(404).json({
                message: 'Could not find a shopping list for ingredients for given recipe'
            })
        }
    })
    .catch(err => {
        console.log('err', err);
        res.status(500).json({

            message: 'Failed to get shopping lists for given recipe'
        })
    })
    
})

// get instructions for a recipe
router.get('/:id/instructions', (req, res) => {
    const {id} = req.params;
    Recipes.getInstructions(id)
    .then( instructions => {
        if (instructions.length) {
            res.status(200).json(instructions)
        } else {
            res.status(404).json({
                message: 'Could not find an instruction for given recipe'
            })
        }
    })
    .catch(err => {
        console.log('err2', err)
        res.status(500).json({
            message: 'Failed to get an instruction for given recipe'
        })}
        )
})
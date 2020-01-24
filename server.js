const express = require('express');
const RecipeRouter = require('./recipe/recipeRouter');
const server = express();

server.use(express.json());

server.use

server.use('/api/recipes', RecipeRouter);


module.exports = server;



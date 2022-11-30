const { Ingredient } = require('../models');

const ingredientData = [
  {
    ingredient_name:  'pie crust',
    recipe_id: 1,
  },
  {
    ingredient_name: 'water',
    recipe_id: 1
  },
  {
    ingredient_name: 'sugar',
  },
  {
    ingredient_name: 'flour',
  },
  {
    ingredient_name: 'butter',
  },
  {
    ingredient_name: 'vanilla extract',
  },
  {
    ingredient_name: 'salt',
  },
  {
    ingredient_name: 'eggs',
  },
];

const ingredientTags = () => Ingredient.bulkCreate(ingredientData);

module.exports = ingredientTags;

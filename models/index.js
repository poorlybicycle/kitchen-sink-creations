const Ingredient = require('./ingredient');
const Recipe = require('./recipe');
const User = require('./user');

// Ingredient belongs to Recipe
Ingredient.belongsTo(Recipe,{
    foreignKey: "recipe_id",
});

// Recipe have many Ingredients
Recipe.hasMany(Ingredient, {
    foreignKey: "recipe_id",
  });






module.exports = {
    Ingredient,
    Recipe,
    User,
  };
  
const Ingredient = require('./ingredient');
const Recipe = require('./recipe');
const User = require('./User');
const UserIngredient = require("./UserIngredient")

// Ingredient belongs to Recipe

// User.hasMany(Ingredient, {
//   foreignKey: "user_id",
//   });

User.belongsToMany(Ingredient, {
  through: UserIngredient,
  as: 'ingredients',
  foreignKey: 'user_id'
})

Ingredient.belongsToMany(Ingredient, {
  through: UserIngredient,
  as: 'users',
  foreignKey: 'ingredient_id'
})




module.exports = {
    Ingredient,
    Recipe,
    User,
    UserIngredient
  };
  
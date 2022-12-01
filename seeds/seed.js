const sequelize = require('../config/connection');
const { User } = require('../models');
const UserIngredient = require('../models/UserIngredient');
const seedIngredients = require('./ingredient-seeds');
const seedRecipes = require('./recipe-seeds');
const userData = require('./userData.json');
const UserIngredientData = require("./user-ingredient-seeds.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
    // await User.bulkCreate(userData, {
    //     individualHooks: true,
    //     returning: true,
    // });
    
    await User.bulkCreate(userData);

console.log('\n----- DATABASE SYNCED -----\n');

await seedIngredients();
console.log('\n----- CATEGORIES SEEDED -----\n');

    await UserIngredient.bulkCreate(UserIngredientData)
// await seedRecipes();
console.log('\n----- PRODUCTS SEEDED -----\n');


    process.exit(0);
};

seedDatabase();
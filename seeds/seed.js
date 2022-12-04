const sequelize = require('../config/connection');
const { User } = require('../models');
const UserIngredient = require('../models/UserIngredient');
const seedIngredients = require('./ingredient-seeds');
const seedRecipes = require('./recipe-seeds');
const userData = require('./userData.json');
const UserIngredientData = require("./user-ingredient-seeds.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    // await User.bulkCreate(userData, {
    //     individualHooks: true,
    //     returning: true,
    // });

    await User.bulkCreate(userData);
    await seedIngredients();
    await UserIngredient.bulkCreate(UserIngredientData)
    await seedRecipes();


    process.exit(0);
};

seedDatabase();
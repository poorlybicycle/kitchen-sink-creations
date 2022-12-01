const { Recipe } = require('../models');

const recipeData = [ 
    {
        recipe_name: 'Depression Pie',
        time: '5',
        serving: '8',
        ingredient: 'pie crust, water, sugar, flour, butter, vanilla extract',
        //can I include a link somehow?
        description: 'A Great Depression era water pie recipe. Only requires a few simple ingredients for a creamy, buttery pie!'
    },
    {
        recipe_name: 'Sugar Cookies',
        time: '30',
        serving: '48',
        ingredient: 'all-purpose flour, baking soda, butter, white sugar, eggs, vanilla extract',
        description: 'Easy sugar cookies that are soft and chewy.'
    },
    {
        recipe_name: 'Chocolate Chip Cookies',
        time: '30',
        serving: '48',
        ingredient: 'all-purpose flour, chocolate chips, baking soda, brown sugar, eggs, vanilla extract',
        description: 'Delicious cookies with crisp edges and chewy middles.'
    },
    {
        recipe_name: 'Muffins',
        time: '35',
        serving: '12',
        ingredient: 'all-purpose flour, baking soda, salt, white sugar, milk, vegetable oil eggs',
        description: 'Simple recipe that can be easily altered for different flavors.'
    },
    {
        recipe_name: 'Easy Bread',
        time: '2',
        serving: '2',
        ingredient: 'unbleached bread flour, granulated sugar, instant yeast, salt, water, yellow cornmeal',
        description: 'This is the easiest bread recipe you will ever make. In your life.'
    },
]

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;

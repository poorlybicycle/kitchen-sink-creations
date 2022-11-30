const { Recipe } = require('../models');

const recipeData = [ 
    {
        title: 'Depression Pie',
        time: '300',
        servings: '8',
        ingredients: 'pie crust, water, sugar, flour, butter, vanilla extract',
        //can I include a link somehow?
        description: 'A Great Depression era water pie recipe. Only requires a few simple ingredients for a creamy, buttery pie!'
    },
    {
        title: 'Sugar Cookies',
        time: '30',
        servings: '48',
        ingredients: 'all-purpose flour, baking soda, butter, white sugar, eggs, vanilla extract',
        description: 'Easy sugar cookies that are soft and chewy.'
    },
    {
        title: 'Chocolate Chip Cookies',
        time: '30',
        servings: '48',
        ingredients: 'all-purpose flour, chocolate chips, baking soda, brown sugar, eggs, vanilla extract',
        description: 'Delicious cookies with crisp edges and chewy middles.'
    },
    {
        title: 'Muffins',
        time: '35',
        servings: '12',
        ingredients: 'all-purpose flour, baking soda, salt, white sugar, milk, vegetable oil eggs',
        description: 'Simple recipe that can be easily altered for different flavors.'
    },
    {
        title: 'Muffins',
        time: '35',
        servings: '12',
        ingredients: 'all-purpose flour, baking soda, salt, white sugar, milk, vegetable oil eggs',
        description: 'Simple recipe that can be easily altered for different flavors.'
    },
    {
        title: 'Easy Bread',
        time: '120',
        servings: '2',
        ingredients: 'unbleached bread flour, granulated sugar, instant yeast, salt, water, yellow cornmeal',
        description: 'This is the easiest bread recipe you will ever make. In your life.'
    },
]

const seedRecipe = () => Recipe.bulkCreate (recipeData)

module.exports = recipeData
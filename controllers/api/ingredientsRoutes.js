const router = require('express').Router();
const {User,Ingredient,Recipe, UserIngredient} = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/newRecipe", withAuth, (req, res) => {
    const recipeInfo = {
        recipe_name: req.body.recipeName,
        time: req.body.time,
        serving: req.body.serving,
        description: req.body.description

    }

   Recipe.create(recipeInfo)
    .then(response => {
        res.json('Recipes are shown')
    })
});
//Get all Ingredients
router.get("/", withAuth, (req, res) => {
    Ingredient.findAll()
        .then((dbIngredientData) => res.json(dbIngredientData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/newIngredient", withAuth, (req, res) => {
    const newIngredientUserRelationship = {
        ingredient_id: req.body.ingredientId,
        user_id: req.session.user_id
    }

    UserIngredient.create(newIngredientUserRelationship)
    .then(response => {
        res.json('created new ingredient')
    })
});


module.exports = router;
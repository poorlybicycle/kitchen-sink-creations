const router = require('express').Router();
const {User,Ingredient,Recipe, UserIngredient} = require('../../models');
const withAuth = require('../../utils/auth');

//Get all Ingredients
router.get("/", withAuth, (req, res) => {
    Ingredient.findAll()
        .then((dbIngredientData) => res.json(dbIngredientData))
        .catch((err) => {
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
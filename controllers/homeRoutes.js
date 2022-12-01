const router = require('express').Router();
const { User, Ingredient, UserIngredient } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // const userData = await User.findAll({
        //     attributes: { exclude: ['password'] },
        //     order: [['name', 'ASC']],
        // });

        // const users = userData.map((project) => project.get({ palin: true }));

        res.render('homepage', {
            // users,
            logged_in: req.session.logged_in,
        });
    }
    catch (err) {
        res.status.apply(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/profile',withAuth, (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        },
        include: [
            {
                model: Ingredient,
                through: UserIngredient,
                as: 'ingredients'
            }
        ]
    }).then(userInfo => {
        const userPantry = userInfo.get({ plain: true})
        res.render("profile", userPantry)
    })
});

router.get('/ingredients',withAuth, (req, res) => {
    Ingredient.findAll()
    .then(ingredientInfo => {
        const ingredientList = ingredientInfo.map(ingredients => ingredients.get({ plain: true}))

        res.render("ingredient", {
            ingredient: ingredientList
        })
    })
});

module.exports = router;
const router = require('express').Router();
const { Model } = require('sequelize');
const { User, Ingredient } = require('../../models');
const UserIngredient = require('../../models/UserIngredient');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email}});

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again'});
            return;
        }

    // const validPassword = await userData.checkPassword(req.body.password);

    // if (!validPassword) {
    //     res.status(400).json({ message: 'Incorrect email or password, please try again'});
    //     return;
    // }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'Logged in!'})
    });

} catch (err) {
    res.status(400).json(err);
}
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status.apply(404).end();
    }
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Ingredient,
                through: UserIngredient,
                as: 'ingredients'
            }
        ]
    }).then(userInfo => {
        res.json(userInfo)
    })
})

module.exports = router;
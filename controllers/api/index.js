const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientsRoutes');


router.use('/users', userRoutes);
router.use('/ingredients', ingredientRoutes);

module.exports = router;
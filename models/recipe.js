const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {
}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        recipeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipeOrigin: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //should be an array of references to ingredients
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            },
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    }
);

module.exports = Recipe;
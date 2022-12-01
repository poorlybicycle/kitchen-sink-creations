const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserIngredient extends Model {}

UserIngredient.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },
        ingredient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "ingredient",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_ingredient',
    }
)

module.exports = UserIngredient
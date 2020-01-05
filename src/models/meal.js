module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name:  {
type: DataTypes.STRING,
allowNull: false
    },
    price:  {
type: DataTypes.STRING,
allowNull: false
    },
    description:  {
type: DataTypes.STRING,
allowNull: false
    },
    images:  {
type: DataTypes.STRING,
allowNull: false
    },
  }, {});
  Meal.associate = (models) => {
    Meal.belongsTo(models.Menu, { 
      foreignKey: 'meal_id'
    })
  };
  return Meal;
};
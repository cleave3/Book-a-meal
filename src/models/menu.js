module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    meal_id: DataTypes.INTEGER
  }, {});
  Menu.associate = (models) => {
    Menu.hasMany(models.Meal, {
      foreignKey: 'meal_id'
    })
  };
  return Menu;
};
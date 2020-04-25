module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      meal_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Meal",
          key: "id",
        },
      },
    },
    {}
  );
  Menu.associate = (models) => {
    Menu.hasMany(models.Meal, {
      foreignKey: "meal_id",
    });
  };
  return Menu;
};

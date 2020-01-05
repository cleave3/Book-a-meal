
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    meal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  };
  return Order;
};

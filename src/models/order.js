module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalamount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: "user_id",
    });
    Order.hasMany(models.Orderdetail, {
      foreignKey: "order_id",
    });
  };
  return Order;
};

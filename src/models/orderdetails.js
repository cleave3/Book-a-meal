module.exports = (sequelize, DataTypes) => {
  const Orderdetails = sequelize.define(
    "Orderdetails",
    {
      order_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      meal_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Orderdetails.associate = (models) => {
    Orderdetails.belongsTo(models.Orders, {
      foreignKey: "order_id",
    });
  };
  return orderdetails;
};

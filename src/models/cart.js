module.exports = (sequelize, DataTypes) => {
	const Cart = sequelize.define(
		'Cart',
		{
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			meal_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		},
		{}
	);
	Cart.associate = models => {
		Cart.belongsTo(models.User, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE'
		});
		Cart.hasMany(models.Meal, {
			foreignKey: 'meal_id',
			onDelete: 'CASCADE'
		});
	};
	return Cart;
};

module.exports = (sequelize, DataTypes) => {
	const Cart = sequelize.define(
		'Cart',
		{
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			product_id: {
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
	};
	return Cart;
};

module.exports = (sequelize, DataTypes) => {
	const Menu = sequelize.define(
		'Menu',
		{
			meal_id: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Meal',
					key: 'id'
				}
			}
		},
		{}
	);
	Menu.associate = models => {
		// Menu.hasMany(models.Meal, {
		// 	foreignKey: {
		// 		fieldName: 'meal_id',
		// 		allowNull: true,
		// 		require: true
		// 	},
		// 	targetKey: 'id'
		// });
	};
	return Menu;
};

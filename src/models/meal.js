module.exports = (sequelize, DataTypes) => {
	const Meal = sequelize.define(
		'Meal',
		{
			meal_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			category_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			price: {
				type: DataTypes.STRING,
				allowNull: false
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false
			},
			images: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false
			}
		},
		{}
	);
	Meal.associate = models => {
		Meal.belongsTo(models.Menu, {
			foreignKey: 'meal_id'
		});
		Meal.belongsToMany(models.Categories, {
			foreignKey: 'meal_id',
			through: 'Mealcategory'
		});
	};
	return Meal;
};

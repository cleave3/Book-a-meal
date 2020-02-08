module.exports = (sequelize, DataTypes) => {
	const Mealcategory = sequelize.define(
		'Mealcategory',
		{
			category_id: {
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
	Mealcategory.associate = function(models) {
		// associations can be defined here
	};
	return Mealcategory;
};

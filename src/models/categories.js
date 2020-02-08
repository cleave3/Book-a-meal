module.exports = (sequelize, DataTypes) => {
	const Categories = sequelize.define(
		'Categories',
		{
			category_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{}
	);
	Categories.associate = models => {
		Categories.hasMany(models.Meal);
	};
	return Categories;
};

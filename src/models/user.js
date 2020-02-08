module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			user_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				isEmail: true,
				unique: true,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			is_admin: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			}
		},
		{}
	);
	User.associate = models => {
		User.hasMany(models.Order, {
			foreignKey: 'user_id'
		});
		User.hasMany(models.Cart, {
			foreignKey: 'user_id'
		});
		User.hasOne(models.Profile, {
			foreignKey: 'user_id'
		});
	};
	return User;
};

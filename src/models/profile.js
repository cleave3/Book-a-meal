module.exports = (sequelize, DataTypes) => {
	const Profile = sequelize.define(
		'Profile',
		{
			user_id: DataTypes.INTEGER,
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			gender: DataTypes.STRING,
			bio: DataTypes.STRING,
			image: DataTypes.STRING
		},
		{}
	);
	Profile.associate = models => {
		Profile.belongsTo(models.User, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE'
		});
	};
	return Profile;
};

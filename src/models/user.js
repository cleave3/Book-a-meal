module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
type: DataTypes.STRING,
allowNull: false
    },
    lastName: {
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
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: 'user_id'
    })
  };
  return User;
};
'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Profiles', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			user_id: {
				type: Sequelize.INTEGER
			},
			first_name: {
				type: Sequelize.STRING
			},
			last_name: {
				type: Sequelize.STRING
			},
			gender: {
				type: Sequelize.STRING
			},
			bio: {
				type: Sequelize.STRING
			},
			image: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Profiles');
	}
};

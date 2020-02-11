'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Meals', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			meal_name: {
				type: Sequelize.STRING
			},
			category_id: {
				type: Sequelize.INTEGER
			},
			price: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			images: {
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
		return queryInterface.dropTable('Meals');
	}
};

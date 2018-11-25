'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
        [
          {
            firstName: 'Frank',
            lastName: 'Grimes',
            createdAt: Sequelize.literal('NOW()'),
            updatedAt: Sequelize.literal('NOW()'),
            email: 'frank.grimes@gmail.com',
            age: 40
          }
        ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Person', null, {});
  }
};

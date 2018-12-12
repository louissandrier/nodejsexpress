'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn( 
     'Voitures',
     'brandId',
     {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
     }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Voitures', 'brandId');
  }
};
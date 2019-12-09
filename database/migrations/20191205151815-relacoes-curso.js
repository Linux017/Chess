'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('cursos', ['area_id'], {
    type: 'foreign key',
    name: 'curso_area_id_fk',
    references: {
      table: 'areas',
      field: 'id'
    },
    onDelete: 'restrict',
    onUpdate: 'restrict'
    })
   },

   down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
    'cursos',
    'curso_area_id_fk'
    );
   }
};

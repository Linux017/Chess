'use strict';
module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('areas', {
    nome: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'areas'
  });
  Area.associate = function(models) {
    // associations can be defined here
  };
  return Area;
};
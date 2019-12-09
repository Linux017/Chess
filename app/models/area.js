'use strict';
module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('areas', {
    nome: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'areas'
  });
  Area.associate = function(models) {
    Area.hasMany(models.cursos);
  };
  return Area;
};
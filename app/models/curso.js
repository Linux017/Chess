'use strict';
module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('cursos', {
    sigla: DataTypes.STRING,
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    area_id: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'cursos'
  });
  Curso.associate = function(models) {
    Curso.belongsTo(models.areas);
  };
  return Curso;
};
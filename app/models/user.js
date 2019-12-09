'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    id_curso: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  User.associate = function(models) {
    User.hasMany(models.mensagems);
    User.hasMany(models.partidas);
  };
  return User;
};
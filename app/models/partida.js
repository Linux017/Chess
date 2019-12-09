'use strict';
module.exports = (sequelize, DataTypes) => {
  const Partida = sequelize.define('partidas', {
    id_user_1: DataTypes.INTEGER,
    id_user_2: DataTypes.INTEGER,
    winner: DataTypes.INTEGER,
    fen: DataTypes.STRING
  }, {
    underscored: true,
  });
  Partida.associate = function(models) {
    Partida.hasMany(models.mensagems);
    Partida.belongsTo(models.users);
  };
  return Partida;
};
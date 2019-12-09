'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mensagem = sequelize.define('mensagems', {
    id_partida: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    mensagem: DataTypes.STRING
  }, {
    underscored: true,
  });
  Mensagem.associate = function(models) {
    Mensagem.belongsTo(models.users);
    Mensagem.belongsTo(models.partidas);
  };
  return Mensagem;
};
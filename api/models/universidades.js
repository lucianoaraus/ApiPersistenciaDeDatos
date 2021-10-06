'use strict';
module.exports = (sequelize, DataTypes) => {
  const universidades = sequelize.define('universidades', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    localidad: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER
  }, {});
  universidades.associate = function(models) {
    // associations can be defined here
    universidades.associate = function (models) {
      //asociacion a carrera (pertenece a:)
      universidades.belongsTo(
        models.carrera, // modelo al que pertenece
        {
          as: "carrera-relacionada", // nombre de mi relacion
          foreignKey: "id_carrera", // campo con el que voy a igualar
        }
      );
    };
  };
  return universidades;
};
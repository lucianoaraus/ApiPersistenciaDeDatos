"use strict";
module.exports = (sequelize, DataTypes) => {
  const universidades = sequelize.define("universidades", {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    localidad: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER, // evaluar si es necesario
  });
  // associations can be defined here
  universidades.associate = function (models) {
    universidades.hasMany(models.carrera, {
      // declaro que el modelo universidades tiene muchas carreras
      as: "carrera",
      primaryKey: "id",
    });
  };
  return universidades;
};

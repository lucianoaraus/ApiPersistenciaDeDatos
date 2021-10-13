"use strict";
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define("carrera", {
    nombre: DataTypes.STRING,
    id_universidad: DataTypes.INTEGER /*-> evaluar esta posibilidad*/,
  });

  //codigo de asociacion  (tiene muchos:)
  carrera.associate = function (models) {
    carrera.belongsTo(models.universidades, {
      as: "universidad-relacionada",
      foreignKey: "id_universidad",
    });
    carrera.hasMany(
      models.materia, // El modelo carrera tiene muchas materias
      {
        as: "materia", // nombre de mi relacion
        foreignKey: "id_carrera", // campo con el que voy a igualar
      },
      // revisar por las dudas
      // Asociacion con el modelo de alumno
      models.alumno,
      {
        as: "alumno", // nombre de mi relacion
        foreignKey: "id_carrera", // campo con el que voy a igualar
      }
    );
  };
  return carrera;
};

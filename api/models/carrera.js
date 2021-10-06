"use strict";
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define(
    "carrera",
    {
      nombre: DataTypes.STRING,
    },
    {}
  );

  //codigo de asociacion  (tiene muchos:)
  carrera.associate = function (models) {
    carrera.hasMany(
      models.materia, // Modelo al que pertenece
      {
        as: "materia", // nombre de mi relacion
        foreignKey: "id_carrera", // campo con el que voy a igualar
      },
      //revisar por las dudas
      // Asociacion con el modelo de alumno
      models.alumno,
      {
        as: "alumno", // nombre de mi relacion
        foreignKey: "id_carrera", // campo con el que voy a igualar
      },
      // Asociacion con el modelo universidad
      models.universidades,
      {
        as: "universidad", // nombre de mi relacion
        foreignKey: "id_carrera", // campo con el que voy a igualar
      }
    );
  };
  return carrera;
};

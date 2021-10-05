"use strict";
module.exports = (sequelize, DataTypes) => {
  const facultad = sequelize.define(
    "facultad",
    {
      nombre: DataTypes.STRING,
      id_carrera: DataTypes.INTEGER,
    },
    {}
);

  facultad.associate = function (models) {
    // la asocio a carrera
    facultad.belongsTo(models.carrera // modelo al que pertenece
      ,{
        as: "carrera-relacionada", // nombre de mi relacion
        foreignKey: "id_carrera", // campo con el que voy a igualar
      }
    );
  };
  return facultad;
};

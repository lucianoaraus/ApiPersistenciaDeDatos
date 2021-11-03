"use strict";
module.exports = (sequelize, DataTypes) => {
  const universidades = sequelize.define("universidades", {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    localidad: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER, 
  });
  
  universidades.associate = function (models) {
    
    materia.belongsTo(models.carrera, {
      // materia pertenece al modelo carrera
      as: "Carrera-Relacionada", // nombre de mi relacion
      foreignKey: "id_carrera", // campo con el que voy a igualar
    });

  };
  return universidades;
};

"use strict";
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define("alumno", {
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    id_carrera: DataTypes.INTEGER,
  });

  alumno.associate = function (models) {
    // associations can be defined here
    
    
    alumno.belongsTo(models.carrera,{
      as : 'Carrera-Relacionada',  // nombre de mi relacion
      foreignKey: 'id_carrera'     // campo con el que voy a igualar
    })
  };
  return alumno;
};

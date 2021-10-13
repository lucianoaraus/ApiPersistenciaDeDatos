var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  console.log("Esto es un mensaje para ver en consola");
  models.universidades
    .findAll({
      attributes: ["id", "nombre", "direccion", "localidad", "id_carrera"],
    })
    .then((universidades) => res.send(universidades))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.universidades
    .create({
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      localidad: req.body.localidad,
      id_carrera: req.body.id_carrera,
    })
    .then((universidades) => res.status(201).send({ id: universidades.id }))
    .catch((error) => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res
          .status(400)
          .send("Bad request: existe otra universidad con el mismo nombre");
      } else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`);
        res.sendStatus(500);
      }
    });
});

const findUniversidad = (id, { onSuccess, onNotFound, onError }) => {
  models.universidades
    .findOne({
      attributes: ["id", "nombre", "direccion", "localidad", "id_carrera"],
      where: { id },
    })
    .then((universidades) =>
      universidades ? onSuccess(universidades) : onNotFound()
    )
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findUniversidad(req.params.id, {
    onSuccess: (universidades) => res.send(universidades),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = (universidades) =>
    universidades
      .update({ nombre: req.body.nombre }, { fields: ["nombre"] })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        if (error == "SequelizeUniqueConstraintError: Validation error") {
          res
            .status(400)
            .send("Bad request: existe otra universidad con el mismo nombre");
        } else {
          console.log(
            `Error al intentar actualizar la base de datos: ${error}`
          );
          res.sendStatus(500);
        }
      });
  findUniversidad(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
});
router.delete("/:id", (req, res) => {
  const onSuccess = (universidades) =>
    universidades
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findUniversidad(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
});

module.exports = router;

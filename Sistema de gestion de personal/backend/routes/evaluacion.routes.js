const express = require("express");
const router = express.Router();
const Evaluacion = require("../models/evaluacion.model");
const Empleado = require("../models/empleado.model");

// Guía de status de error: https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status

router.post("/", async (req, res) => {
  const { fecha, calificacion, idEvaluador, idEmpleado } = req.body;

  // Validar campos obligatorios
  if (!fecha || !calificacion || !idEvaluador || !idEmpleado) {
    return res.status(400).json({
      mensajeError:
        "Los campos fecha, calificación, id evaluador y id empleado son obligatorios",
    });
  }

  // Validar que el tipo esté dentro de los valores permitidos por el enum
  const calificacionPermitidos = ["Mala", "Regular", "Buena", "Excelente"];
  if (!calificacionPermitidos.includes(calificacion)) {
    return res.status(400).json({
      mensajeError:
        "La calificación debe ser una de: " + calificacionPermitidos.join(", "),
    });
  }

  // Validar que el empleado exista en la DB
  try {
    const empleadoExistente = await Empleado.findById(idEmpleado);
    const evaluadorExistente = await Empleado.findById(idEvaluador);
    if (!empleadoExistente || !evaluadorExistente) {
      return res.status(400).json({
        mensajeError: "El empleado o evaluador especificado no existe",
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ mensajeError: "El ID del empleado o evaluador no es válido" });
  }

  try {
    const nuevaEvaluacion = new Evaluacion({
      fecha: fecha || undefined,
      calificacion,
      comentarios: req.body.comentarios || undefined,
      idEvaluador,
      idEmpleado,
    });
    // Si fecha ===  undefined, mongoose usa el default
    await nuevaEvaluacion.save();
    res.status(201).json(nuevaEvaluacion);
  } catch (error) {
    res.status(400).json({ mensajeError: error.message });
  }
});

/* Ejemplo de body para POST: http://localhost:3000/evaluaciones
{
  "nombreDocumento": "Diploma de Inglés",
  "tipo": "Diploma",
  "urlArchivo": "www.compresor.net",
  "idEmpleado": "69b361259248f6ff050bb2e0" 
}
*/

router.get("/", async (req, res) => {
  try {
    const evaluaciones = await Evaluacion.find().populate("idEmpleado");
    res.json(evaluaciones);
  } catch (error) {
    res.status(500).json({ msj: "Error al obtener las evaluaciones", error });
  }
});

module.exports = router;

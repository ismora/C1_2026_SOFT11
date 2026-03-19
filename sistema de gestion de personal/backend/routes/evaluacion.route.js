const express = require("express");
const router = express.Router();
const Evaluacion = require("../modelos/evaluacion.model");
const Empleado = require("../modelos/empleado.model");

// POST - Crear evaluación
router.post("/", async (req, res) => {
    const { fecha, calificacion, comentarios, evaluador, empleado } = req.body;

    if (!fecha || calificacion === undefined || !evaluador || !empleado) {
        return res.status(400).json({ mensajeError: "Los campos fecha, calificacion, evaluador y empleado son obligatorios" });
    }

    if (typeof calificacion !== "number" || calificacion < 0 || calificacion > 100) {
        return res.status(400).json({ mensajeError: "La calificacion debe ser un número entre 0 y 100" });
    }

    try {
        const evaluadorExiste = await Empleado.findById(evaluador);
        if (!evaluadorExiste) {
            return res.status(400).json({ mensajeError: "El evaluador especificado no existe" });
        }
    } catch (error) {
        return res.status(400).json({ mensajeError: "El ID del evaluador no es válido" });
    }

    try {
        const empleadoExiste = await Empleado.findById(empleado);
        if (!empleadoExiste) {
            return res.status(400).json({ mensajeError: "El empleado especificado no existe" });
        }
    } catch (error) {
        return res.status(400).json({ mensajeError: "El ID del empleado no es válido" });
    }

    try {
        const nuevaEvaluacion = new Evaluacion({ fecha, calificacion, comentarios, evaluador, empleado });
        await nuevaEvaluacion.save();
        res.status(201).json(nuevaEvaluacion);

    } catch (error) {
        res.status(400).json({ mensajeError: error.message });
    }
});

// GET - Obtener todas las evaluaciones
router.get("/", async (req, res) => {
    try {
        const evaluaciones = await Evaluacion.find()
            .populate("evaluador", "nombre correo")
            .populate("empleado", "nombre correo");
        res.json(evaluaciones);
    } catch (error) {
        res.status(500).json({ mensajeError: "Error al obtener las evaluaciones", error });
    }
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Proyecto = require("../modelos/proyecto.model");

// POST - Crear proyecto
router.post("/", async (req, res) => {
    const { nombre, descripcion, fechaInicio, fechaFin, estado } = req.body;

    if (!nombre || !fechaInicio || !estado) {
        return res.status(400).json({ mensajeError: "Los campos nombre, fechaInicio y estado son obligatorios" });
    }

    const estadosPermitidos = ["Planificado", "En progreso", "Finalizado", "Cancelado"];
    if (!estadosPermitidos.includes(estado)) {
        return res.status(400).json({ mensajeError: "El estado debe ser uno de: " + estadosPermitidos.join(", ") });
    }

    try {
        const nuevoProyecto = new Proyecto({ nombre, descripcion, fechaInicio, fechaFin, estado });
        await nuevoProyecto.save();
        res.status(201).json(nuevoProyecto);

    } catch (error) {
        res.status(400).json({ mensajeError: error.message });
    }
});

// GET - Obtener todos los proyectos
router.get("/", async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        res.json(proyectos);
    } catch (error) {
        res.status(500).json({ mensajeError: "Error al obtener los proyectos", error });
    }
});

module.exports = router;
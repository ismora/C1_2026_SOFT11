const express = require("express");
const router = express.Router();
const Departamento = require("../modelos/departamento.model");

// POST - Crear departamento
router.post("/", async (req, res) => {
    const { nombre, descripcion } = req.body;

    if (!nombre) {
        return res.status(400).json({ mensajeError: "El campo nombre es obligatorio" });
    }

    try {
        const nuevoDepartamento = new Departamento({ nombre, descripcion });
        await nuevoDepartamento.save();
        res.status(201).json(nuevoDepartamento);

    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ mensajeError: "Ya existe un departamento con ese nombre" });
        }
        res.status(400).json({ mensajeError: error.message });
    }
});

// GET - Obtener todos los departamentos
router.get("/", async (req, res) => {
    try {
        const departamentos = await Departamento.find();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ mensajeError: "Error al obtener los departamentos", error });
    }
});

module.exports = router;
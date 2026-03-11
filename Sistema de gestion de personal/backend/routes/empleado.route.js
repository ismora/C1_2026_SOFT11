const express = require("express");
const router = express.Router(); // Crear la señal
const Empleado = require("../models/empleado.model");

// Rutas
// Post: Crear / enviar un nuevo dato a la BD
router.post("/", async (req, res) => {
    const { nombre, correo, contrasenia, direccion } = req.body;

    if (!nombre || !correo || !contrasenia || !direccion) {
        return res.status(400).json({ mensajeError: "Todos los datos son obligatorios." });
    }

    // Validar los campos anidados de la direccion
    const { provincia, distrito, canton } = direccion;

    if (!provincia || !distrito || !canton) {
        return res.status(400).json({ mensajeError: "La direccion debe incluir provincia, canton y distrito." });
    }

    try {
        const nuevoEmpleado = new Empleado({ nombre, correo, contrasenia, direccion });
        await nuevoEmpleado.save();
        res.status(201).json(nuevoEmpleado);
    } catch (error) {
        res.status(400).json({ mensajeError: error.message });
    }
});


// GET

router.get("/", async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT


module.exports = router;
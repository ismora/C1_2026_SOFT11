const express = require("express");
const router = express.Router(); // Crear la señal
const Empleado = require("../models/empleado.model");
const Certificacion = require("../models/certificacion.model")

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


// GET: Solicitar los datos de los empleados a la BD

router.get("/", async (req, res) => {
    try {
        const empleados = await Empleado.find().populate("certificaciones");
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT
router.put("/agregar-certificacion", async (req, res) => {
    const { correo, certificacionId } = req.body;

    if (!correo || !certificacionId) {
        return res.status(400).json({ mensajeError: "Correo y ID de la certificacion son obligatorios." });
    }

    try {
        // Verificar que la certificacion existe.
        const certificacion = await Certificacion.findById(certificacionId);
        if (!certificacion) {
            return res.status(404).json({ Error: "Certificacion no encontrada." })
        }

        // Buscar el usuario y agregar la certificacion
        const empleado = await Empleado.findOne({ correo });
        if (!empleado) {
            return res.status(404).json({ Error: "Usuario no encontrado." })
        }
        if (!empleado.certificaciones.includes(certificacionId)) {
            empleado.certificaciones.push(certificacionId);
            await empleado.save();
        }
        res.status(200).json({ msj: "Certificacion agregada al empleado ", empleado })


    } catch (error) {
        res.status(400).json({ mensajeError: error.message });
    }
});


module.exports = router;
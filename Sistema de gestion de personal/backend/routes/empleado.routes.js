const express = require("express");
const router = express.Router();
const Empleado = require("../models/empleado.model"); // Importar el modelo de empleado

//Rutas
//POST: Crear/enviar un nuevo dato a la BD
router.post("/", async (req, res) => {
  const { nombre, correo, contrasenia, direccion } = req.body;

  if (!nombre || !correo || !contrasenia || !direccion) {
    return res
      .status(400)
      .json({ mensajeError: "Todos los datos son obligatorios" });
  }

  // Validar los campos anidados de la dirección
  const { provincia, canton, distrito } = direccion;
  if (!provincia || !canton || !distrito) {
    return res.status(400).json({
      mensajeError: "La dirección debe incluir provincia, canton y distrito",
    });
  }

  try {
    const nuevoEmpleado = new Empleado({
      nombre,
      correo,
      contrasenia,
      direccion,
    });
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    res.status(400).json({ mensajeError: error.message });
  }
});

// GET: Solicitar los datos de los empleados a la BD
router.get("/", async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//PUT

module.exports = router; //Exportar el router para utilizarlo en el backend

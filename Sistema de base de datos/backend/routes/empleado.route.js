const express = require("express");
const router = express.Router(); // crear la señal
const Empleado = require("../models/empleado.model");

//Rutas
//POST: Crear nuevos datos al servidor
router.post("/", async (req, res) => {
    const { nombre, correo, contrasenia, direccion } = req.body;

    if (!nombre || !correo || !contrasenia || !direccion) {
        return res.status(400).json({ mensajeError: "Todos lps datos son obligatorios" });

    }
    // validar los campos anidados de la direccion
    const { provincia, canton, distrito } = direccion;
    if (!provincia || !canton || !distrito) {
        return res.status(400).json({ mensajeError: "La dirección debe incluir provincia, cantón y distrito" });
    }
    try {
        const nuevoEmpleado = new Empleado({ nombre, correo, contrasenia, direccion });
        await nuevoEmpleado.save();
        res.status(201).json(nuevoEmpleado);
    } catch (error){
        rest.status(400).json({mensajeError: error.message});
    }

});

// GET: Solicitar los datos de los empleados a la BD
router.get("/", async(req, res) =>{
    try{
        const empleados = await Empleado.find();
        res.json(empleados);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;

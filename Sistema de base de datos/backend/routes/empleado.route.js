const express = require("express");
const router = express.Router(); // crear la señal
const Empleado = require("../models/empleado.model");
const Certificacion = require("../models/certificacion.model");

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
        const empleados = await Empleado.find().populate("certificaciones");
        res.json(empleados);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

// PUT: Agregar una certificación a un empleado
router.put("/agregar-certificacion", async(req, res) =>{
    const {correo, certificacionId} = req.body;

    if(!correo || !certificacionId){
        return res.status(400).json({mensajeError: "Correo y ID de la certificación son obligatorios"});
    }
    
    try{
        // Verificar que la certificación existe
        const certificacion = await Certificacion.findById(certificacionId);
        if (!certificacion){
            return res.status(404).json({error: "Certificación no encontrada"});
        }

        // Buscar el usuario y agregar la certificación
        const empleado = await Empleado.findOne({correo});
        if (!empleado){
            return res.status(404).json({error: "Empleado no encontrado"});
        }
        if (!empleado.certificaciones.includes(certificacionId)){
            empleado.certificaciones.push(certificacionId);
            await empleado.save();
        }
        res.status(200).json({msj: "Certificación agregada al empleado", empleado});
        
    } catch(error){
        res.status(400).json({mensajeError: error.message});
    }
});

module.exports = router;

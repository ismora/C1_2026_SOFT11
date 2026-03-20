const express = require("express");
const router = express.Router();
const Departamento = require("../models/departamento.model");

router.post("/", async (req, res) => {
    try {
        const nuevoDepartamento = new Departamento(req.body);
        await nuevoDepartamento.save();
        res.status(201).json(nuevoDepartamento); 
    } catch (error) {
        res.status(400).json({ msj: "Error al crear la certificación", error });
    }
});

/* {
"nombre": "Software",
"descripcion": "opcional"
} */

router.get("/", async (req, res) => {
    try {
        const departamentos = await Departamento.find();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ msj: "Error al obtener las certificaciones", error });
    }
});

module.exports = router;
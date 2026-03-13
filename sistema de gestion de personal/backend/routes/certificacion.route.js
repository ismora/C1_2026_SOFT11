const express = require("express");
const router = express.Router();
const Certificacion = require('../modelos/certificacion.model');

router.post("/", async (req, res) => {
    try {
        const nuevaCertificacion = new Certificacion(req.body);
        await nuevaCertificacion.save();
        res.status(201).json(nuevaCertificacion); 
    } catch (error) {
        res.status(400).json({ msj: "Error al crear la certificación", error });
    }
});

/* {
"nombre": "Python",
"institucion": "CENFOTEC"
} */

router.get("/", async (req, res) => {
    try {
        const certificaciones = await Certificacion.find();
        res.json(certificaciones);
    } catch (error) {
        res.status(500).json({ msj: "Error al obtener las certificaciones", error });
    }
});

module.exports = router;
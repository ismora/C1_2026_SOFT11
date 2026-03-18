const express = require("express");
const router = express.Router();
const Departamento = require("../models/departamento.model");

router.post("/", async (req, res) => {
  try {
    const nuevoDepartamento = new Departamento(req.body);
    await nuevoDepartamento.save();
    res.status(201).json(nuevoDepartamento);
  } catch (error) {
    res.status(400).json({ msj: "Error al crear el departamento", error });
  }
});

/* {
"nombreDepartamento": "Python",
"descripcionDepartamento": "CENFOTEC"
} */

router.get("/", async (req, res) => {
  try {
    const departamentos = await Departamento.find();
    res.json(departamentos);
  } catch (error) {
    res.status(500).json({ msj: "Error al obtener los departamentos", error });
  }
});

module.exports = router;

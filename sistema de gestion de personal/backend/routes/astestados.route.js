const express = require('express');
const router = express.Router();
const Atestado = require('../models/atestado.model');
const Empleado = require('../models/empleado.model');

// Guía de status de error: https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status

router.post("/", async (req, res) => {
  const { nombreDocumento, tipo, urlArchivo, fecha, idEmpleado } = req.body;

  // Validar campos obligatorios
  if (!nombreDocumento || !tipo || !urlArchivo || !idEmpleado) {
    return res.status(400).json({ mensajeError: "Los campos nombre del documento, tipo, URL del archivo y id empleado son obligatorios" });
  }

  // Validar que el tipo esté dentro de los valores permitidos por el enum
  const tiposPermitidos = ['Diploma', 'Certificado', 'Título', 'Constancia', 'Otro'];
  if (!tiposPermitidos.includes(tipo)) {
    return res.status(400).json({ mensajeError: "El tipo debe ser uno de: " + tiposPermitidos.join(', ') });
  }

  // Validar que el empleado exista en la DB
  try {
    const empleadoExistente = await Empleado.findById(idEmpleado);
    if (!empleadoExistente) {
      return res.status(400).json({ mensajeError: "El empleado especificado no existe" });
    }
  } catch (error) {
    // manejo de error
  }
});

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const atestadoSchema = new mongoose.Schema({
  nombreDocumento: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true,
    enum: ['Diploma', 'Certificado', 'Título', 'Constancia', 'Otro']
  },
  urlArchivo: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true,
    default: Date.now
  },
  idEmpleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empleado',
    required: true
  }
});

module.exports = mongoose.model('Atestado', atestadoSchema);

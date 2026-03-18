const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const evaluacionDesempenioSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
    default: Date.now, // Fecha actual por defecto
  },
  calificacion: {
    type: String,
    required: true,
    enum: ["Mala", "Regular", "Buena", "Excelente"], // Valores permitidos (enum: Restringe los valores permitidos a un conjunto específico predefinido)
  },
  comentarios: {
    type: String,
    required: false,
  },
  idEvaluador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleado",
    required: true,
  },
  idEmpleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleado",
    required: true,
  },
});

module.exports = mongoose.model(
  "EvaluacionDesempenio",
  evaluacionDesempenioSchema,
);

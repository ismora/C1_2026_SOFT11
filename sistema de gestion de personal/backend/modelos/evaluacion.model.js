const mongoose = require("mongoose");

const schemaEvaluacion = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    calificacion: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    comentarios: {
        type: String
    },
    evaluador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Empleado",
        required: true
    },
    empleado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Empleado",
        required: true
    }
});

module.exports = mongoose.model("Evaluacion", schemaEvaluacion);
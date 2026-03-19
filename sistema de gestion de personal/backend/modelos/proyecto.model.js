const mongoose = require("mongoose");

const schemaProyecto = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date
    },
    estado: {
        type: String,
        enum: ["Planificado", "En progreso", "Finalizado", "Cancelado"],
        required: true,
        default: "Planificado"
    }
});

module.exports = mongoose.model("Proyecto", schemaProyecto);
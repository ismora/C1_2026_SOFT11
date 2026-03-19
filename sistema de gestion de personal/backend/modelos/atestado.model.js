const mongoose = require("mongoose");

const schemaAtestado = new mongoose.Schema({
    nombreDocumento: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: ["Diploma", "Certificado", "Titulo", "Constancia", "Otro"],
        required: true
    },
    urlArchivo: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    idEmpleado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Empleado",
        required: true
    }
});

module.exports = mongoose.model("Atestado", schemaAtestado);
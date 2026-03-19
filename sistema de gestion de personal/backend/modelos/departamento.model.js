const mongoose = require("mongoose");

const schemaDepartamento = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String
    }
});

module.exports = mongoose.model("Departamento", schemaDepartamento);
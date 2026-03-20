const mongoose = require("mongoose")

// Creación del esquema
const schemaDepartamento = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    }
});

module.exports = mongoose.model("Departamento", schemaDepartamento); // Exportar el modelo para poder utilizarlo en el backend.
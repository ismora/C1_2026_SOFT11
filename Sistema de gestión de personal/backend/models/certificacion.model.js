const mongoose = require("mongoose")

// Creación del esquema
const schemaCertificacion = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    institucion: {
        type: String,
        required: true
    }, 
    descripcion: {
        type: String
    }
});

module.exports = mongoose.model("Certificacion", schemaCertificacion); // Exportar el modelo, para poder utilizarlo en el back-end  


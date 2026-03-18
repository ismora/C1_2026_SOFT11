const mongoose = require("mongoose");

// Creación del esquema
const schemaCertificacion = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  institucion: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
});

/**
 * {
"nombre": "Angular",
"institucion": "Tec",
"descripcion": "Certificación obligatoria"
}
 */

module.exports = mongoose.model("Certificacion", schemaCertificacion);

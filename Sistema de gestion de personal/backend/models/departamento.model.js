const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Creación del esquema
const schemaDepartamento = new mongoose.Schema({
  nombreDepartamento: {
    type: String,
    required: true,
  },
  descripcionDepartamento: {
    type: String,
  },
});

/**
 * {
"nombreDepartamento": "Finanzas",
"descripcionDepartamento": "Departamento encargado de la gestión financiera",
}
 */

module.exports = mongoose.model("Departamento", schemaDepartamento);

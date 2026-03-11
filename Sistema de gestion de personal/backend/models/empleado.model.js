const mongoose = require("mongoose"); //Importar mongoose para manejar la base de datos
const Schema = mongoose.Schema; //Crear un esquema para definir la estructura de los documentos en la colección

//Definir el esquema del empleado
const schemaEmpleado = new mongoose.Schema({
  nombre: { type: String, required: true, unique: false }, //Campo obligatorio de tipo string
  correo: {
    type: String,
    required: true,
    unique: true, //El correo debe ser único para cada empleado
  },
  contrasenia: { type: String, required: true }, //Campo obligatorio de tipo string con longitud mínima de 6 caracteres

  direccion: {
    provincia: {
      type: String,
      required: true,
    },
    distrito: {
      type: String,
      required: true,
    },
    canton: {
      type: String,
      required: true,
    },
    ubicacion: {
      type: String,
    },
  },
});
const Empleado = mongoose.model("Empleado", schemaEmpleado);
module.exports = Empleado; // Exportar el modelo para utilizarlo en el backend

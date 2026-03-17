const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

// Creación del esquema
const schemaEmpleado = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: false
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contrasenia: {
        type: String,
    },
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
        }
    },
    "certificaciones": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Certificacion"
    }]
 
});

const Empleado = mongoose.model("Empleado", schemaEmpleado);
module.exports = Empleado; // exportar el modelo para utilizar
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creacion del esquema
const schemaEmpleado = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        unique: false
    },
    correo: {
        type: String,
        require: true,
        unique: true
    },
    contrasenia: {
        type: String,
        require: true,
    },
    direccion: {
        provincia: {
            type: String,
            require: true,
        },
        distrito: {
            type: String,
            require: true,
        },
        canton: {
            type: String,
            require: true,
        },
        ubicacion: {
            type: String
        }
    }
});

const Empleado = mongoose.model("Empleado", schemaEmpleado);
module.exports = Empleado; //Exportar el model para utilizarlo en el backend.
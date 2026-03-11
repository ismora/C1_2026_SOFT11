const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creacion del esquema

const SchemaEmpleado = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        unique: false
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contrasenia:{
        type: String,
        required: true,
    },
    direccion:{
        provincia:{
            type: String,
            required: true,
        },
        distrito:{
            type: String,
            required: true,
        },
        canton:{
            type: String,
            required: true,
        },
        ubicacion:{
            type: String
        }

    }

});

const Empleado = mongoose.model("Empleado", SchemaEmpleado);
module.exports = Empleado;  //
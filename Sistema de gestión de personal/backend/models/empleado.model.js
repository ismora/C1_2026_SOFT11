const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creación del esquema
const schemaEmpleado = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        unique: false
    },
    correo:{
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
    },
    "certificaciones":[
        {
            type: Schema.Types.ObjectId,
            ref: "Certificacion"
        }
    ]
});

const Empleado = mongoose.model("Empleado", schemaEmpleado);
module.exports = Empleado; // Exportar el modelo para utilizarlo en el backend  
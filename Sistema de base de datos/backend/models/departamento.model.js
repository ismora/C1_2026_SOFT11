const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departamentoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true,
    enum: ['nada'] // Valores permitidos (enum: Restringe los valores permitidos a un conjunto específico predefinido)
  }
});

module.exports = mongoose.model('Atestado', atestadoSchema);
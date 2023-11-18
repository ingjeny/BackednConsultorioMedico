const mongoose = require("mongoose");

const usuarioConsultorioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UsuarioConsultorio', usuarioConsultorioSchema);

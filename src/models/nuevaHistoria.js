const mongoose = require("mongoose");

const nuevaHistoriaSchema = mongoose.Schema({
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsuarioConsultorio', // Hace referencia al modelo de UsuarioConsultorio
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    notas: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('NuevaHistoria', nuevaHistoriaSchema);

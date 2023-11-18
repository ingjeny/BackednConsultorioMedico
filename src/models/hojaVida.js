const mongoose = require("mongoose");

const hojaVidaSchema = mongoose.Schema({
    id_historia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Historia', // Hace referencia al modelo de Historia
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    dirección: {
        type: String,
        required: true
    },
    teléfono: {
        type: String,
        required: true
    },
    seguro_medico: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('HojaVida', hojaVidaSchema);

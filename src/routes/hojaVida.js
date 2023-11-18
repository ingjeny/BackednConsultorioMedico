const express = require("express");
const hojaVidaSchema = require("../models/hojaVida");

const router = express.Router();

// Crear hoja de vida del paciente
router.post("/hojas-vida", (req, res) => {
    const hojaVida = hojaVidaSchema(req.body);
    hojaVida
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener hojas de vida de pacientes
router.get("/hojas-vida", (req, res) => {
    hojaVidaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener hoja de vida por ID
router.get("/hojas-vida/:id", (req, res) => {
    const { id } = req.params;
    hojaVidaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar hoja de vida
router.put("/hojas-vida/:id", (req, res) => {
    const { id } = req.params;
    const { id_historia, nombre, apellido, fecha_nacimiento, sexo, dirección, teléfono, seguro_medico } = req.body;
    hojaVidaSchema
        .updateOne({ _id: id }, { $set: { id_historia, nombre, apellido, fecha_nacimiento, sexo, dirección, teléfono, seguro_medico } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Borrar hoja de vida
router.delete("/hojas-vida/:id", (req, res) => {
    const { id } = req.params;
    hojaVidaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;

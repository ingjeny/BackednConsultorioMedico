const express = require("express");
const nuevaHistoriaSchema = require("../models/nuevaHistoria");

const router = express.Router();

// Crear nueva historia clínica
router.post("/nueva-historia", (req, res) => {
    const nuevaHistoria = nuevaHistoriaSchema(req.body);
    nuevaHistoria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener nuevas historias clínicas
router.get("/nueva-historia", (req, res) => {
    nuevaHistoriaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener nueva historia clínica por ID
router.get("/nueva-historia/:id", (req, res) => {
    const { id } = req.params;
    nuevaHistoriaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar nueva historia clínica
router.put("/nueva-historia/:id", (req, res) => {
    const { id } = req.params;
    const { id_usuario, fecha, notas } = req.body;
    nuevaHistoriaSchema
        .updateOne({ _id: id }, { $set: { id_usuario, fecha, notas } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Borrar nueva historia clínica
router.delete("/nueva-historia/:id", (req, res) => {
    const { id } = req.params;
    nuevaHistoriaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;

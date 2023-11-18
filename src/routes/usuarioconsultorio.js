const express = require("express");
const usuarioConsultorioSchema = require("../models/usuarioconsultorio");

const router = express.Router();


router.post("/usuariosconsultorios", (req, res) => {
    const usuario = usuarioConsultorioSchema(req.body);
    usuario.validate(err => {
        if (err) {
            return res.json({ message: err });
        }

        usuario
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    });
});



router.get("/usuarioconsultorios", (req, res) => {
    usuarioConsultorioSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


router.get("/usuariosconsultorios/:id", (req, res) => {
    const { id } = req.params;
    const usuario = usuarioConsultorioSchema.findById(id, { projection: { _id: 1 } });
    if (!usuario) {
        return res.json({ message: "El usuario no existe" });
    }

    res.json(usuario);
});

router.put("/usuarioconsultorios/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, contraseña } = req.body;
    usuarioConsultorioSchema
        .updateOne({ _id: id }, { $set: { nombre, apellido, email, contraseña } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


router.delete("/usuarioconsultorios/:id", (req, res) => {
    const { id } = req.params;
    usuarioConsultorioSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;

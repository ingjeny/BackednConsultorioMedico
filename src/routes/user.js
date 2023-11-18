const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// crear usuarios 

router.post("/users", (req, res) => {
const user= userSchema(req.body);
user
.save() // guarda
.then((data) => res.json(data)) // si guarda responde con los datos
.catch((error) => res.json({ message: error})) // si no, nos da error 

});

// obtenerlos 
router.get("/users", (req, res) => {
    userSchema
    .find() // encontrar
    .then((data) => res.json(data)) // si guarda responde con los datos
    .catch((error) => res.json({ message: error})) // si no, nos da error 
    
    });

// encontrar un usuario especifico 

router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id) // encontrar
    .then((data) => res.json(data)) // si guarda responde con los datos
    .catch((error) => res.json({ message: error})) // si no, nos da error 
    
    });

    // actualizar el usuario

    router.put("/users/:id", (req, res) => {
        const { id } = req.params;
        const{ name, age, email } = req.body
        userSchema
        .updateOne({ _id: id}, {$set: {name, age, email}}) // encontrar
        .then((data) => res.json(data)) // si guarda responde con los datos
        .catch((error) => res.json({ message: error})) // si no, nos da error 
        
        });

    // borrar el usuario

    router.delete("/users/:id", (req, res) => {
        const { id } = req.params;
        userSchema
        .deleteOne({ _id: id }) // Reemplaza 'remove' con 'deleteOne'
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    });


module.exports = router 
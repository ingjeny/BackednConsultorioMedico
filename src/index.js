const express = require("express");
const mongoose = require ("mongoose");
require("dotenv").config();
const userRoutes =require ("./routes/user")

const app = express();
const port = process.env.PORT || 9000;

//middlewar
app.use(express.json());
app.use('/api', userRoutes)



// routes
app.get("/", (req, res) => {
    res.send("funciono esto");
});

//mongose 

mongoose
.connect(process.env.MONGODB_URI)
.then(() =>  console.log("conecto a mongodb"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listeninig on port', port))
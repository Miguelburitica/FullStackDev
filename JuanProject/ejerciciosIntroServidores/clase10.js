const express = require('express');
const app = express();
const path = require('path');

let saludo = "Hola pvtos"

app.get("/home", (req, res) => {
    res.send("Hola, estamos en el home")
    }
)
app.get("/perfil", (req, res) => {
    res.send(saludo);
    }
)

let producto = {
    tipoProducto : null,
    precio : null,
    cantidad : null,
}

app.get("/producto/agregar", (req, res) => {
    res.send(producto);
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/about-us,html"))
});

app.listen(3000, () => console.log("Empezamos"))
const express = require("express")
const path = require("path")

const app = express();

const port = process.env.PORT || 3000

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get("/hamilton", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hamilton.html"))
})

app.get('/lovelace', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/lovelace.html'))
});

app.get('/berners-lee', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/berners-lee.html'))
});

app.get('/clarke', (req,res) =>{   
    res.sendFile(path.join(__dirname, '/views/clarke.html'))
});

app.get('/hopper', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/hopper.html'))
});

//https://github.com/JorgePazA/practicaServidores.git

// Continuos integration, continous deploye ci cd, 
// npm install -g nodemon


app.use(express.static(path.resolve(__dirname, "public")));

app.listen(port, () => {        
    console.log("server in port ${port}");
})
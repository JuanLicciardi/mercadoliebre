
const express = require('express');
const app = express();
const path = require ('path');
const port = 3030;

app.get('/', (req, res) => res.send("ABRIENDO PAGINA"));

app.listen(puerto, () => console.log(`Server Runing in port ${port}`))
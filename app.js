
// Declaración de Constantes
const express = require('express');
const app = express();
const path = require ('path');
const port = 3030;


const pathPublic = path.resolve(__dirname,"./public");
app.use(express.static(pathPublic));

//ejecuta pagina index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname,"./views","index.html")));


// Activación de Servidor en puerto 3030
app.listen(port, () => console.log(`Server Runing in http://localhost:`+port))
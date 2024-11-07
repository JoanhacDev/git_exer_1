// Declaracion de variables globales
const router = require('./routers/exer.router');
const path = require('path');
const colors = require('colors');
const express = require('express');
const app = express();
const port = 3030;

// Configuracion del servidor

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use('/', (req, res, next) => {
    console.log(`Metodo: ${req.method} - Ruta: ${req.url}`.rainbow);
    next();
})

// Rutas
app.use('/', router);

// Ejecucion del servidor
app.listen(3030, () => {
    console.log(`Servidor en funcionamiento en la url http://localhost:${port}`);
});
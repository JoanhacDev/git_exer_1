const router = require('./routers/exer.router');

const express = require('express');
const app = express();
const port = 3030;

app.use('/', router);


app.listen(3030, () => {
    console.log(`Servidor en funcionamiento en la url http://localhost:${port}`);
});
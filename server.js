const express = require('express');

const app = express();

app.use(express.json());

app.post('/mensaje', (req, res) => {

    console.log('Mensaje recibido:');
    console.log(req.body);

    res.send('ok');

});

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

});

app.listen(3000, () => {

    console.log('Servidor iniciado');

});  
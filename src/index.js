const express = require('express');
const path = require('path');
const colores = require('colors');

const server = express();
server.set('port', 8080);
server.set('views', path.join(__dirname + '/views'));
server.set('view engine', 'ejs');
// Establezco un engine para que se puedan leer los documentos con extensión .html
server.engine('html', require('ejs').renderFile);

// Método static para poder utilizar css, img, etc.
server.use(express.static(path.join(__dirname + '/public')));

server.use(require('./routes/index'));


server.listen(server.get('port'), () => {
    console.log(`Server encendido en puerto ${server.get('port')}`.red);
});
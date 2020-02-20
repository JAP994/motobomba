const express = require('express');
// la const App es para crear el servidor
const app = express();
const path = require('path');
//Envio el numero de puerto
app.set('port', 8080);
//para la direccion de 
app.set('views', path.join(__dirname, 'views'));
//html
app.engine('html', require('ejs').renderFile)
    //motor de vista o motor de plantilla
app.set('view engine', 'ejs');

//middelewares

//importamos las rutas
app.use(require('./routes/routes'));
//archivos estaticos
app.use(express.static(path.join(__dirname, '/css')));
app.use(express.static(path.join(__dirname, '/js')));
//console.log(path.join(__dirname, '/json'));
// se llama al servidor y se ejecuta en el puerto requerido
app.listen(app.get('port'), () => {

    console.log('Server on port', app.get('port'));
});
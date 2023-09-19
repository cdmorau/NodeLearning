const http = require('http');
// Incorporar modulo http

const hostname = '127.0.0.1';
const port = 3000; 

//Creación de servidor
// req todas las peticiones que hacen a nuestro servidor
//res todas las respuestas

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    //crea una instancia de servidor que va a atender las peticiones
    res.setHeader('Content-Tupe', 'text/plain');
    res.end('Hola Mundo:\n');
});

server.listen(port,hostname, ()=>{
    console.log(`Servidor está corriendo sobre http://${hostname}:${port}`);
});
const http = require('http');
let visitas = 0;

const server = http.createServer((req, res) => {
    visitas++;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hola Mundo! <br/>');
    res.write(`Visitante numero: ${visitas}` + "<br/>");
    res.end();
});

server.listen(8080);
console.log("Escuchando en http://localhost:8080")
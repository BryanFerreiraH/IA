const http = require('http');

const server = http.createServer((req, res) => {
    let body = [];
    req.on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Mensaje Recibido! <br/>');
        res.write(`Body ${body}` + "<br/>");
        res.end();
    }).on('error', err => {
        console.log(err.stack);
    });
});

server.listen(8080);
console.log("Escuchando en http://localhost:8080")
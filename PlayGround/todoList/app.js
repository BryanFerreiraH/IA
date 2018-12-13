const { crearArchivo } = require('./multiplicar/multiplicar.js');

let parametro = argv._[0];
switch (parametro) {
    case 'listar':
        console.log('Listar');
        break;
    case 'borrar': 
        console.log('borrar');
        break;
    case 'actualizar':
        console.log('actualizar');
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log('Archivo creado:'))
            .catch(e => console.log(e));
        break;
    default:
        console.log("comando no existente");
}
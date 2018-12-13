const argv = require('yargs')
    .command('listar', 'Imprime en consolsa la tabla', {base,limite})
    .help().argv;

const base = {
    base: {
        demand: true,
        alias: 'b'
    }
}
const limite = {
    limite: {
        alias: 'l',
        default: 10
    }
}


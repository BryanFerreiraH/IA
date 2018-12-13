const fs = require('fs');
let listadosPorHacer = [
    {"tarea":"HTML I","done":false},
    {"tarea":"CSS","done":false},
    {"tarea":"Responsive design","done":false},
    {"tarea":"Git","done":false},
    {"tarea":"JavaScript I","done":false},
    {"tarea":"JavaScript II","done":false}
];


const guardarDB = () => {
    let data = JSON.stringify(listadosPorHacer);
    fs.writeFile(`resultados/data.js`, data, (err) => {
        if (err) throw new Error('No se puede grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadosPorHacer = require('../resultados/data.js');
    } catch (error) {
        listadosPorHacer = [];
    }
}

const getListado = () =>  {
    cargarDB();
    return listadosPorHacer;
}

const actualizar = ( descripcion, completado = true ) => {
    cargarDB();
    listadosPorHacer.map( e => {
        if (e.tarea == descripcion) {
            e.done = completado;
        }
    });
    getListado();

}
const borrar = (descripcion) => {
    cargarDB();
    listadosPorHacer
    guardarDB();

}
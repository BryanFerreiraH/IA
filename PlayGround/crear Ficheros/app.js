let listadosPorHacer = [
    {"tarea":"HTML I","done":false},
    {"tarea":"CSS","done":false},
    {"tarea":"Responsive design","done":false},
    {"tarea":"Git","done":false},
    {"tarea":"JavaScript I","done":false},
    {"tarea":"JavaScript II","done":false}
];

const descripcion = 'CSS';

listadosPorHacer.map( e => {
    if (e.tarea == descripcion) {
        e.done = completado;
    }
});
var DB;

const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdministra = document.querySelector('#administra');

document.addEventListener('DOMContentLoaded', () => {
    let crearDB = window.indexedDB.open('citas', 1);
    crearDB.onsuccess = (event) => {DB = event.target.result};


    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e) {
        e.preventDefault() 
        console.log(DB)
    }

    function mostrarCitas() {



    }

    function borrarCita(e) {


    }
})
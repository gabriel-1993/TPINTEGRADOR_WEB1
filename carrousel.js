// CARROUSEL  ***********************************************************************************************************

document.addEventListener("DOMContentLoaded", () => {

// Lista con rutas de imagenes
const listaImagenes = [
    './imagenesGrandes/1.jpg',
    './imagenesGrandes/2.jpg',
    './imagenesGrandes/3.jpg',
    './imagenesGrandes/4.jpg',
    './imagenesGrandes/5.jpg',
    './imagenesGrandes/6.jpg',
    './imagenesGrandes/7.jpg',
    './imagenesGrandes/8.jpg',
    './imagenesGrandes/9.jpg',
    './imagenesGrandes/10.jpg',
    './imagenesGrandes/11.jpg'
];

const etiquetaImagen = document.getElementById('imagen');
const btnAnterior = document.querySelector('.btnAnterior');
const btnSiguiente = document.querySelector('.btnSiguiente');

let indexImagen = 0;

// Funcion para mostrar la imagen actual
function mostrarImagen() {
    const imagenActual = listaImagenes[indexImagen];
    etiquetaImagen.src = imagenActual;
}
// Incrementa el valor de indexImagen en 1 y utiliza el operador % para asegurarse de que el indice este dentro de los valores permitidos de la lista
function mostrarSiguiente() {
    indexImagen = (indexImagen + 1) % listaImagenes.length;
    mostrarImagen();
}

//Disminuye el valor de indexImagen en 1 y utiliza el operador % para asegurarse 
//de que el indice este dentro de los valores permitidos de la lista
// Funcion para mostrar la imagen anterior
function mostrarAnterior() {
    indexImagen = (indexImagen - 1 + listaImagenes.length) % listaImagenes.length;
    mostrarImagen();
}

// Mostrar la imagen inicial
mostrarImagen();

// Agregar escuchadores de eventos a los botones para cambiar de imagenes
btnSiguiente.addEventListener('click', mostrarSiguiente);
btnAnterior.addEventListener('click', mostrarAnterior);



    // llave,parentesis y ; del document.addEventListener("DOMContentLoaded", () => {  Principal para 
    // ejecutar el js una vez este todo el html cargado...
});





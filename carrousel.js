//Esperar que termine de cargar el DOM para ejecutar JS
document.addEventListener("DOMContentLoaded", () => {
    //etiqueta Img vacia en html
    const etiquetaImagen = document.getElementById('imagen');
    //btns para moverse en el carrousel
    const btnAnterior = document.querySelector('.btnAnterior');
    const btnSiguiente = document.querySelector('.btnSiguiente');

    let indexImagen = 0;

    let listaImagenes = ['./imagenesGrandes/1.jpg',
            './imagenesGrandes/2.jpg',
            './imagenesGrandes/3.jpg',
            './imagenesGrandes/4.jpg',
            './imagenesGrandes/5.jpg',
            './imagenesGrandes/6.jpg',
            './imagenesGrandes/7.jpg',
            './imagenesGrandes/8.jpg',
            './imagenesGrandes/9.jpg',
            './imagenesGrandes/10.jpg',
            './imagenesGrandes/11.jpg'];

    function mostrarImagen() {
        let imagenActual = listaImagenes[indexImagen];
        etiquetaImagen.src = imagenActual;
    }

    function mostrarSiguiente() {
        indexImagen = (indexImagen + 1) % listaImagenes.length;
        mostrarImagen();
    }

    function mostrarAnterior() {
        indexImagen = (indexImagen - 1 + listaImagenes.length) % listaImagenes.length;
        mostrarImagen();
    }

    // Mostrar la primera imagen al cargar la página
    mostrarImagen();

    // Agregar escuchadores de eventos a los botones para cambiar de imágenes
    btnSiguiente.addEventListener('click', mostrarSiguiente);
    btnAnterior.addEventListener('click', mostrarAnterior);

});
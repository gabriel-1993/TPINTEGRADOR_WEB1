document.addEventListener("DOMContentLoaded", () => {
    const etiquetaImagen = document.getElementById('imagen');
    const btnAnterior = document.querySelector('.btnAnterior');
    const btnSiguiente = document.querySelector('.btnSiguiente');
  
    let indexImagen = 0;
    let listaImagenes = []; // Declarar listaImagenes aquí para tener alcance global
  
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
  
    function actualizarListaImagenes() {
      const screenWidth = window.innerWidth;
      let imagenesGrandes = [  './imagenesGrandes/1.jpg',
      './imagenesGrandes/2.jpg',
      './imagenesGrandes/3.jpg',
      './imagenesGrandes/4.jpg',
      './imagenesGrandes/5.jpg',
      './imagenesGrandes/6.jpg',
      './imagenesGrandes/7.jpg',
      './imagenesGrandes/8.jpg',
      './imagenesGrandes/9.jpg',
      './imagenesGrandes/10.jpg',
      './imagenesGrandes/11.jpg'  ];
      let imagenesChicas = [  './imagenesGrandes/1.jpg',
      './imagenesGrandes/2.jpg',
      './imagenesGrandes/3.jpg',
      './imagenesGrandes/4.jpg',
      './imagenesGrandes/5.jpg',
      './imagenesGrandes/6.jpg',
      './imagenesGrandes/7.jpg',
      './imagenesGrandes/8.jpg',
      './imagenesGrandes/9.jpg',
      './imagenesGrandes/10.jpg',
      './imagenesGrandes/11.jpg'  ];
  
      if (screenWidth <= 391) {
        listaImagenes = imagenesChicas.slice();
      } else {
        listaImagenes = imagenesGrandes.slice();
      }
  
      mostrarImagen(); // Actualiza la imagen cuando cambia el tamaño de la pantalla
    }
  
    // Llama a actualizarListaImagenes al principio para inicializar la lista
    actualizarListaImagenes();
  
    // Agregar escuchadores de eventos al cambio de tamaño de la ventana
    window.addEventListener('resize', actualizarListaImagenes);
    // Agregar escuchadores de eventos a los botones para cambiar de imágenes
    btnSiguiente.addEventListener('click', mostrarSiguiente);
    btnAnterior.addEventListener('click', mostrarAnterior);
  });

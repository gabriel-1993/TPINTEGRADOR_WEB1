document.addEventListener("DOMContentLoaded", () => {

    // elementos a modificar 
    const contenedorGeneral = document.querySelector("#contenedorTemplates");
    const contenedorNoticias = document.querySelector("#contenedorNoticias");
    const btnModificarEstilos = document.querySelector("#btnModificarTemplates");
    const divNotiPrin = document.querySelector("#divNoticiaPrincipal");
    const NotiPrinP = document.querySelector("#NotiPrinP");
    const NotiPrinStrong = document.querySelector("#NotiPrinStrong");
    const pDetalleNoticiaPrincipal = document.querySelector("#pDetalleNoticiaPrincipal");
    const divCardNoticia = document.querySelectorAll("#cardNoticia");
    const otraNoticiaP = document.querySelectorAll("#otraNoticiaP");
    const otraNoticiaStrong = document.querySelectorAll("#otraNoticiaStrong");


    // Noticia Principal elementos y sus clases 
    let idsContenedorGeneral = ['contenedorTemplates', 'contenedorTemplatesOpc2', 'contenedorTemplatesOpc3']
    let idsContenedorNoticias = ['contenedorNoticias', 'contenedorNoticiasOpc2', 'contenedorNoticiasOpc3'];
    let idsBtnMod = ['btnModificarTemplates', 'btnOpc2', 'btnOpc3'];
    let idsDivNoticiaPrincipal = ['divNoticiaPrincipal', 'divNoticiaPrincipalOpc2', 'divNoticiaPrincipalOpc3'];
    let idsNotiPrinP = ['NotiPrinP', 'NotiPrinPopc2', 'NotiPrinPopc3'];
    let idsNotiPrinStrong = ['NotiPrinStrong', 'NotiPrinStrongOpc2', 'NotiPrinStrongOpc3'];
    let idsPdetalleNoticiaPrincipal = ['pDetalleNoticiaPrincipal', 'pDetalleNoticiaPrincipalOpc2', 'pDetalleNoticiaPrincipalOpc3'];

    // Cards con otras noticas
    let idsCardNoticia = ['cardNoticia', 'cardNoticiaOpc2', 'cardNoticiaOpc3'];
    let idsOtraNoticiaP = ['otraNoticiaP', 'otraNoticiaPOpc2', 'otraNoticiaPOpc3'];
    let idsOtraNoticiaStrong = ['otraNoticiaStrong', 'otraNoticiaStrongOpc2', 'otraNoticiaStrongOpc3'];

    // indice para recorrer los arrays
    let indiceActual = 0;

    btnModificarEstilos.addEventListener('click', function () {

        // Remover la clase actual
        contenedorGeneral.id = "";
        contenedorNoticias.id = "";
        btnModificarEstilos.id = "";
        NotiPrinP.id = "";
        NotiPrinStrong.id = "";
        pDetalleNoticiaPrincipal.id = "";
        divNotiPrin.id = "";
        divCardNoticia.id = "";
        otraNoticiaStrong.id="";

        // Incrementar el índice para apuntar a la siguiente clase
        indiceActual++;

        // Verificar si alcanzamos el final del arreglo, en cuyo caso reiniciamos desde el principio
        if (indiceActual === idsContenedorGeneral.length) {
            indiceActual = 0;
        }

        // Agregar nuevo id
        contenedorGeneral.id = idsContenedorGeneral[indiceActual];
        btnModificarEstilos.id = idsBtnMod[indiceActual];
        contenedorNoticias.id = idsContenedorNoticias[indiceActual];
        divNotiPrin.id = idsDivNoticiaPrincipal[indiceActual];
        NotiPrinP.id = idsNotiPrinP[indiceActual];
        NotiPrinStrong.id = idsNotiPrinStrong[indiceActual];
        pDetalleNoticiaPrincipal.id = idsPdetalleNoticiaPrincipal[indiceActual];
        // varios div con el mismo id ,border de otras noticias
        divCardNoticia.forEach(function (elemento) {
            //modifica el id de a uno por iteracion
            elemento.id = idsCardNoticia[indiceActual];
        }); 
        // varios STRONG con el mismo id ,en otras noticias
        otraNoticiaStrong.forEach(function (elemento) {
            //modifica el id de a uno por iteracion
            elemento.id = idsOtraNoticiaStrong[indiceActual];
        });
        // varios P con el mismo id, en otras noticias
        otraNoticiaP.forEach(function (elemento) {
            //modifica el id de a uno por iteracion
            elemento.id = idsOtraNoticiaP[indiceActual];
        });




    })




    // FIN DOMContentLoaded
});





const iconoMenu = document.getElementById("MenuHamburugesa");
const menuResp = document.querySelector(".ulHeader");

// Agregar evento de clic en cualquier parte del documento
document.addEventListener('click', function(event) {
    const target = event.target;

    // Verificar si el clic no ocurrio en el menu,ni en el icono del menu
    if (!menuResp.contains(target) && target !== iconoMenu) {
        menuResp.classList.remove("menuResponsive");
    }
});

// Agregar evento de desplazamiento (scroll)
window.addEventListener('scroll', function() {
    // Verificar si el menu responsivo esta abierto
    if (menuResp.classList.contains("menuResponsive")) {
        menuResp.classList.remove("menuResponsive");
    }
});

iconoMenu.addEventListener('click', function(event) {
    // Evitar que el clic en el icono del menu propague y cierre el menu inmediatamente
    event.stopPropagation();
    menuResp.classList.toggle("menuResponsive");
});
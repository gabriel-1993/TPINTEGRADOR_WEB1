// VALIDAR FORMULARIO INGRESO  ******************************************************************************************

document.addEventListener("DOMContentLoaded", () => {
    const formIngresar = document.getElementById("ingresoForm");
    const nombreIngresar = document.getElementById("nombreIngresar");
    const divMsj = document.querySelector(".divMensaje");
    const btnIngresar = document.querySelector(".btnIngresar");
    const btnMsjAceptar = document.querySelector(".btnAceptar");

    // CreateElement  p: msj de error dentro del div
    var pMsj = document.createElement("p");
    //Agrego class pMsj para el css
    pMsj.className = "pMsj";
    //Agrego el texto del p
    pMsj.textContent = "Por favor, ingrese un nombre de usuario";
    //guardo dentro del divMsj el pMsj
    divMsj.appendChild(pMsj);

    formIngresar.addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = nombreIngresar.value.trim();
        if (nombre === "") {
            // El campo esta vacio, mostramos el mensaje de error
            divMsj.classList.add("mostrarMsj");
            if (btnMsjAceptar.addEventListener('click', function () {
                divMsj.classList.remove("mostrarMsj");
            }));
        } else {
            // El campo se ha llenado, ocultamos el mensaje de error
            divMsj.classList.remove("mostrarMsj");
            divMsj.innerHTML = ""; // Limpiamos el contenido del div
        }
    });
    console.log(SubmitEvent);



    // llave,parentesis y ; del document.addEventListener("DOMContentLoaded", () => {  Principal para 
    // ejecutar el js una vez este todo el html cargado...
});



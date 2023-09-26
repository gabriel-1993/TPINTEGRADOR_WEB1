// VALIDAR FORMULARIO INGRESO  ******************************************************************************************


document.addEventListener("DOMContentLoaded", () => {
    const formIngresar = document.getElementById("ingresoForm");

const nombreIngresar = document.getElementById("nombreIngresar");

const divMsj = document.querySelector(".divMensaje");

const btnIngresar = document.querySelector(".btnIngresar");

btnIngresar.addEventListener('click', function() {
    // Capturamos el valor del nombre
    const nombre = nombreIngresar.value.trim();

    if (nombre === "") {
      // El campo está vacío, mostramos el mensaje de error
      divMsj.style.display = "block";
      divMsj.innerHTML = "<p>Por favor, ingrese su nombre.</p>";
    } else {
      // El campo no está vacío, ocultamos el mensaje de error
      divMsj.style.display = "none";
      divMsj.innerHTML = "";
    }
  });


    // llave,parentesis y ; del document.addEventListener("DOMContentLoaded", () => {  Principal para 
    // ejecutar el js una vez este todo el html cargado...
  });



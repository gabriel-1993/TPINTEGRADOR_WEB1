const formulario = document.querySelector(".contactoForm");
const divMsj = document.querySelector(".divMensaje");
const btnMsjAceptar = document.querySelector(".btnAceptar");

 //logo de error para agregar al msj
 const imgError = document.createElement("img");
 imgError.className = "imgError";
 imgError.src = "./imagenesChicas/error.png";

  //logo Ok para ingresar cuando cumple:
  const imgOk = document.createElement("img");
  imgOk.className = "imgOk";
  imgOk.src = "./imagenesChicas/ok.png";

// Función para mostrar mensajes
function mostrarMensaje(mensaje, esError = true) {
    // Crear un nuevo elemento <p> para mensajes
    const pMsj = document.createElement("p");
    pMsj.style.display = "flex";
    pMsj.style.alignItems = "center"; 
    pMsj.style.fontSize = "1rem";

    if (esError) {
        pMsj.textContent = `Error: ${mensaje}`;
        pMsj.appendChild(imgError);
        btnMsjAceptar.classList.add("hoverError");
        pMsj.style.color = "red";
    } else {
        pMsj.textContent = `Éxito: ${mensaje}`;
        pMsj.appendChild(imgOk);
        btnMsjAceptar.classList.add("hoverOk");
        pMsj.style.color = "green";
    }

    // Eliminar cualquier mensaje anterior
    const mensajeAnterior = divMsj.querySelector(".mensaje");
    if (mensajeAnterior) {
        divMsj.removeChild(mensajeAnterior);
    }

    // Agregar el nuevo mensaje
    pMsj.classList.add("mensaje");
    divMsj.appendChild(pMsj);
    divMsj.classList.add("mostrarMsj");
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir la presentación automática del formulario

    const nombre = document.getElementById("nombreContacto").value;
    const correo = document.getElementById("correoElectronicoContacto").value;
    const mensaje = document.getElementById("mensajeContacto").value;

    let nombreCumple = true;
    let correoCumple = true;
    let msjCumple = true;

    const expNom = /^[a-zA-Z\s]{6,}$/;
    const expCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expNom.test(nombre)) {
        mostrarMensaje("El nombre debe contener al menos 6 letras.");
        nombreCumple = false;
    }

    if (!expCorreo.test(correo)) {
        mostrarMensaje("El formato de correo es incorrecto.");
        correoCumple = false;
    }

    if (mensaje.trim() === "") {
        mostrarMensaje("Debe ingresar algún mensaje.");
        msjCumple = false;
    }

    if (nombreCumple && correoCumple && msjCumple) {
        mostrarMensaje("Mensaje enviado correctamente.", false);

        // Evento click para la card de mensajes
        btnMsjAceptar.addEventListener('click', function () {
            document.getElementById("nombreContacto").value = "";
            document.getElementById("correoElectronicoContacto").value = "";
            document.getElementById("mensajeContacto").value = "";
            divMsj.classList.remove("mostrarMsj");
            // Enviar el formulario
            formulario.submit();
        });
    } else {
        btnMsjAceptar.addEventListener('click', function () {
            document.getElementById("nombreContacto").value = "";
            document.getElementById("correoElectronicoContacto").value = "";
            document.getElementById("mensajeContacto").value = "";
            divMsj.classList.remove("mostrarMsj");

        });
    }
});
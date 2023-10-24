document.addEventListener("DOMContentLoaded", () => {

    const ingresoForm = document.getElementById("ingresoForm");
    const divMsj = document.querySelector(".divMensaje");
    const btnMsjAceptar = document.querySelector(".btnAceptar");
    const errores = []; // Lista de errores acumulados

    // Logo de error para agregar al mensaje
    const imgError = document.createElement("img");
    imgError.className = "imgError";
    imgError.src = "./imagenesChicas/error.png";

    // Logo "OK" para mostrar cuando cumple
    const imgOk = document.createElement("img");
    imgOk.className = "imgOk";
    imgOk.src = "./imagenesChicas/ok.png";

    // Función para mostrar mensajes
    function mostrarMensajes() {
        // Limpiar mensajes anteriores
        divMsj.innerHTML = '';
        divMsj.appendChild(btnMsjAceptar);

        // Crear una lista ordenada para los mensajes
        const ul = document.createElement("ul");
        ul.style.flexDirection = "column";
        ul.style.gap = "5px";

        // LI para cada mensaje en la lista de errores, o un solo mensaje.
        const tituloDivMsj = document.createElement("li");
        tituloDivMsj.style.display = "flex";
        tituloDivMsj.style.alignItems = "center";
        tituloDivMsj.style.width = "100%";
        tituloDivMsj.style.justifyContent = "center";
        tituloDivMsj.style.fontSize = "1.3rem";
        tituloDivMsj.style.letterSpacing = "1px";

        // Si hay errores, mostrar todos los errores
        if (errores.length > 0) {
            tituloDivMsj.textContent = "ERROR ";
            tituloDivMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");

            ul.appendChild(tituloDivMsj);

            errores.forEach((error) => {
                // Texto en rojo para errores
                ul.style.color = "red";
                const li = document.createElement("li");
                li.textContent = error;
                li.style.letterSpacing = "1px";
                ul.appendChild(li);
            });

            divMsj.appendChild(ul);
            btnMsjAceptar.classList.add("hoverError");
        } else {
            tituloDivMsj.textContent = "¡Bienvenido... Iniciando Sesión!";
            tituloDivMsj.appendChild(imgOk);
            ul.style.color = "green";
            //lo removemos por si hubieron errores
            btnMsjAceptar.classList.remove("hoverError");
            btnMsjAceptar.classList.add("hoverOk");
            ul.appendChild(tituloDivMsj);
            divMsj.appendChild(ul);
            btnMsjAceptar.classList.add("hoverOk");
        }

        // Agregar el nuevo mensaje
        divMsj.classList.add("mostrarMsj");
    }

    ingresoForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir la presentación automática del formulario
        // Limpiar errores anteriores
        errores.length = 0;

        const usuario = document.getElementById("nombreIngresar").value.trim();
        const password = document.getElementById("passwordIngresar").value.trim();

        let usuarioCumple = true;
        let passwordCumple = true;

        const expNom = /^[a-zA-Z\s]{6,}$/;
        const passwordExp = /^[a-zA-Z0-9]{5,10}$/;

        if (!expNom.test(usuario)) {
            errores.push("El nombre debe contener al menos 6 letras.");
            usuarioCumple = false;
        }

        if (!passwordExp.test(password)) {
            errores.push("El password puede combinar letras y números, mínimo 5 caracteres y máximo 10.");
            passwordCumple = false;
        }

        mostrarMensajes();

        // Evento click para la tarjeta de mensajes
        btnMsjAceptar.addEventListener('click', function () {
            // Ocultar el div con los mensajes
            divMsj.classList.remove("mostrarMsj");

            if (usuarioCumple && passwordCumple) {
                // Enviar el formulario
                ingresoForm.submit();
            }
        });
    });

    // ******************************************************************************************************************************
    //FORMULARIO DE REGISTRO:

    // //captura formregistro, user, pass 
    const registroForm = document.getElementById("registroForm");
    const usuarioRegistro = document.getElementById("nombreRegistro");
    const passwordRegistro = document.getElementById("passwordRegistro");
    const passwordConfirmar = document.getElementById("passwordRegistro2");
    const correoRegistro = document.getElementById("correoRegistro");
    // mismo divMsj  para los mensajes
    // mismo btnMsjAceptar para cerrar los mensajes


    registroForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Limpiar errores anteriores
        errores.length = 0;

        let usuarioRegistroCumple = true;
        let passwordRegistroCumple = true;
        let correoCumple = true;

        expNom = /^[a-zA-Z\s]{6,}$/;
        passwordExp = /^[a-zA-Z0-9]{5,10}$/;

        // VALIDAR USUARIO REGISTRO
        const usuario = usuarioRegistro.value.trim();

        if (!expNom.test(usuario)) {
            // msj de error para campo vacío
            errores.push("Usuario obligatorio...ingrese un nombre de usuario.");
            usuarioRegistroCumple = false;
        }

        // VALIDAR PASSWORD REGISTRO

        const password = passwordRegistro.value.trim();
        const passwordConfirmar = passwordRegistro2.value.trim();

        if (password === "" || passwordConfirmar === "") {
            // msj de error pass vacío
            errores.push("Password: ingrese el password y luego su confirmación.");
            passwordRegistroCumple = false;
        } if (password !== passwordConfirmar) {
            errores.push("Password: ingrese el mismo password en confirmación.");
            passwordRegistroCumple = false;
        }
        if (!passwordExp.test(password)) {
            // El password no cumple con los criterios letras azAZ09, min 5 letras max 10, muestra el mensaje de error
            errores.push("Password: puede combinar letras y números, mínimo 5 caracteres y máximo 10.");
            passwordRegistroCumple = false;
        }

        // VALIDAR CORREO
        const correo = correoRegistro.value.trim();
        const expCorreo = /^[a-zA-Z0-9-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (correo === "") {
            // Msj error para correo ingresado vacío 
            errores.push("Email: campo obligatorio.");
            correoCumple = false;
        } if (!expCorreo.test(correo)) {
            // Msj error para correo mal ingresado
            errores.push("Email: debe tener el siguiente formato: nombre@dominio.com");
            correoCumple = false;
        }

        mostrarMensajes();

        // Evento click para la tarjeta de mensajes
        btnMsjAceptar.addEventListener('click', function () {
            // Ocultar el div con los mensajes
            divMsj.classList.remove("mostrarMsj");
            if (usuarioRegistroCumple && passwordRegistroCumple && correoCumple ) {
                // Enviar el formulario
                registroForm.submit();
            }
        });
    });


    //cierre });  document.addEventListener("DOMContentLoaded", () => { ... ejecuta JS luego de la carga del DOM
});

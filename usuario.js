

// VALIDAR FORMULARIO INGRESO  ******************************************************************************************

// JS inicia siempre y cuando el DOM este cargado por completo  *********************************************************
document.addEventListener("DOMContentLoaded", () => {
    //captura formingreso, user, pass, btnIngresar, divCardMsjsOkError, btnAceptar
    const formIngresar = document.getElementById("ingresoForm");
    const usuarioIngresar = document.getElementById("nombreIngresar");
    const passwordIngresar = document.getElementById("passwordIngresar");
    const divMsj = document.querySelector(".divMensaje");
    const btnIngresar = document.querySelector(".btnIngresar");
    const btnMsjAceptar = document.querySelector(".btnAceptar");

    //MENSAJE DE ERROR
    // CreateElement  p: msj de error dentro del div
    var pMsj = document.createElement("p");
    //Agrego class pMsj para mostrar con el css
    pMsj.className = "pMsj";
    pMsj.style.display = "flex";
    pMsj.style.alignItems = "center"; 
    //guardo dentro del divMsj el pMsj
    divMsj.appendChild(pMsj);
    //logo de error para agregar al msj
    const imgError = document.createElement("img");
    imgError.className = "imgError";
    imgError.src = "./imagenesChicas/error.png";


    //Expresion regular para usuario
    const usuarioExp = /^[a-zA-Z0-9]{6,12}$/;

    let usuarioCumple = false;

    formIngresar.addEventListener("submit", function (event) {
        event.preventDefault();

        //VALIDAR USUARIO 

        // guardar usuario ingresado
        const usuario = usuarioIngresar.value.trim();

        if (usuario === "") {
            // msj de error para campo vacio
            pMsj.style.fontSize = "1.3rem";
            pMsj.textContent = "Error: El campo de usuario está vacío.";
            pMsj.appendChild(imgError);
            divMsj.classList.add("mostrarMsj");
        } else if (!usuarioExp.test(usuario)) {
            // El usuario no cumple con los criterios letras azAZ09, min 6 letras max 12, muestra el mensaje de error
            pMsj.style.fontSize = "1rem";
            pMsj.textContent = "Error: El usuario puede combinar letras y números, mínimo 6 caracteres y máximo 12.";
            pMsj.appendChild(imgError);
            divMsj.classList.add("mostrarMsj");
        } else {
            // Usuario valido guardo boolean para comparar al final
            usuarioCumple = true;
        }
        // el evento click de la card con msjs esta luego del password


        //VALIDAR PASSWORD

        //guardar password
        //Expresion regular para pass
        const passwordExp = /^[a-zA-Z0-9]{5,10}$/;
        const password = passwordIngresar.value.trim();
        let passwordCumple = false;

        if (password === "") {
            // msj de error para campo vacio
            pMsj.style.fontSize = "1.3rem";
            pMsj.textContent = "Error: El campo de password está vacío.";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        } else if (!passwordExp.test(password)) {
            // El password no cumple con los criterios letras azAZ09, min 5 letras max 10, muestra el mensaje de error
            pMsj.style.fontSize = "1.2rem";
            pMsj.textContent = "Error: El password puede combinar letras y números, mínimo 5 caracteres y máximo 10.";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        } else {
            // Usuario valido guardo boolean para comparar al final
            passwordCumple = true;
        }


        //si ambos cumplen mostrar msj,limpiar campos y enviar form
        //logo Ok para ingresar cuando cumple:
        const imgOk = document.createElement("img");
        imgOk.className = "imgOk";
        imgOk.src = "./imagenesChicas/ok.png";

        if (usuarioIngresar.value === "" && passwordIngresar.value === "") {
            pMsj.textContent = "Datos vacios, ingrese usuario y password";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        }

        if (usuarioCumple && passwordCumple) {
            //limpiar campos
            usuarioIngresar.value = "";
            passwordIngresar.value = "";
            //mostrar msj
            pMsj.textContent = "¡Iniciando sesión!";
            pMsj.appendChild(imgOk);
            divMsj.classList.add("mostrarMsj");
        }

        // Evento click para la card de mensajes
        btnMsjAceptar.addEventListener('click', function () {
            usuarioIngresar.value = "";
            passwordIngresar.value = "";
            divMsj.classList.remove("mostrarMsj");
            // Enviar el formulario
            formIngresar.submit();
        });


    });
    // VALIDAR FORMULARIO REGISTRO  ******************************************************************************************

    // //captura formingreso, user, pass, btnIngresar, divCardMsjsOkError, btnAceptar
    const formRegistro = document.getElementById("registroForm");
    const usuarioRegistro = document.getElementById("nombreRegistro");
    const passwordRegistro = document.getElementById("passwordRegistro");
    const passwordConfirmar = document.getElementById("passwordRegistro2");
    const correoRegistro = document.getElementById("correoRegistro");
    // el mismo divMsj  para los mensajes
    const btnEnviar = document.querySelector(".btnRegistro");
    // el mismo btnMsjAceptar para cerrar los mensajes...


    //MENSAJE DE ERROR REGISTRO
    // CreateElement  p: msj de error dentro del div
    //el mismo pMsj 
    //Agrego el texto del p
    pMsj.textContent = "Por favor, ingrese un nombre de usuario";
    //guardo dentro del divMsj el pMsj
    divMsj.appendChild(pMsj);
    //logo de error imgError logo de ok imgOk

    formRegistro.addEventListener("submit", function (event) {
        event.preventDefault();

        //VALIDAR USUARIO REGISTRO

        // guardar usuario ingresado registro
        const usuario = usuarioRegistro.value.trim();

        if (usuario === "") {
            // msj de error para campo vacio
            pMsj.style.fontSize = "1.3rem";
            pMsj.textContent = "Error: campo obligatorio. Por favor, ingrese un Usuario.";
            pMsj.appendChild(imgError);
            divMsj.classList.add("mostrarMsj");
        } else if (!usuarioExp.test(usuario)) {
            // El usuario no cumple con los criterios letras azAZ09, min 6 letras max 12, muestra el mensaje de error
            pMsj.style.fontSize = "1rem";
            pMsj.textContent = "Error: El usuario puede combinar letras y números, mínimo 6 caracteres y máximo 12.";
            pMsj.appendChild(imgError);
            divMsj.classList.add("mostrarMsj");
        } else {
            // Usuario valido guardo boolean para comparar al final
            usuarioCumple = true;
        }
        // el evento click de la card con msjs esta luego del password


        //VALIDAR PASSWORD REGISTRO

        //Expresion regular para pass
        const passwordExp = /^[a-zA-Z0-9]{5,10}$/;
        const password = passwordRegistro.value.trim();
        const passwordConfirmar = passwordRegistro2.value.trim();
        let passwordCumple = false;

        if (password === "" || passwordConfirmar === "") {
            // msj de error para campo vacio
            pMsj.style.fontSize = "1.3rem";
            pMsj.textContent = "Error: campos obligatorios. Por favor, ingrese el password y confirmelo.";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        } else if (password !== passwordConfirmar) {
            // msj de error para pass diferentes
            pMsj.style.fontSize = "1.3rem";
            pMsj.textContent = "Error: passwords diferentes. Por favor, ingrese el mismo password en confirmación.";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        }
        else if (!passwordExp.test(password)) {
            // El password no cumple con los criterios letras azAZ09, min 5 letras max 10, muestra el mensaje de error
            pMsj.style.fontSize = "1.2rem";
            pMsj.textContent = "Error: El password puede combinar letras y números, mínimo 5 caracteres y máximo 10.";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        } else {
            // Usuario valido guardo boolean para comparar al final
            passwordCumple = true;
        }

        //VALIDAR CORREO
        const correoRegistro = document.getElementById("correoRegistro");
        const correo = correoRegistro.value.trim();
        const expCorreo = /^[a-zA-Z0-9-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let correoCumple=false;
        if (correo === "") {
            // Msj error para correo ingresado vacio 
            pMsj.style.fontSize = "1.2rem";
            pMsj.textContent = "Error: campo obligatorio. Por favor, ingrese un E-mail.";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        } else if (!expCorreo.test(correo)) {
            // Msj error para correo mal ingresado
            pMsj.style.fontSize = "1.2rem";
            pMsj.textContent = "Error: el E-mail debe tener el formato correcto: nombre@dominio.com";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        } else {
            correoCumple=true;
        }

        if(usuarioCumple && passwordCumple && correoCumple){
           //limpiar campos
            usuarioIngresar.value = "";
            passwordRegistro.value = "";
            passwordRegistro2.value="";
            correoRegistro.value="";
            //mostrar msj
            pMsj.textContent = "¡ Bienvenido... registro exitoso !";
            pMsj.appendChild(imgOk);
            divMsj.classList.add("mostrarMsj");
        }

        // Evento click para la card de mensajes
        btnMsjAceptar.addEventListener('click', function () {
            divMsj.classList.remove("mostrarMsj");
            // Enviar el formulario
            formRegistro.submit();
        });


    // }); del event form registro
    });





//cierre });  document.addEventListener("DOMContentLoaded", () => { ... ejecuta JS luego de la carga del DOM
});



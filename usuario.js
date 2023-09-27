

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
    //Agrego el texto del p
    pMsj.textContent = "Por favor, ingrese un nombre de usuario";
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
            pMsj.style.fontSize="1.3rem";            
            pMsj.textContent = "Error: El campo de usuario está vacío.";
            pMsj.appendChild(imgError);
            divMsj.classList.add("mostrarMsj");
        } else if (!usuarioExp.test(usuario)) {
            // El usuario no cumple con los criterios letras azAZ09, min 6 letras max 12, muestra el mensaje de error
            pMsj.style.fontSize="1rem";            
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
            pMsj.style.fontSize="1.3rem";
            pMsj.textContent = "Error: El campo de password está vacío.";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        } else if (!passwordExp.test(password)) {
            // El password no cumple con los criterios letras azAZ09, min 5 letras max 10, muestra el mensaje de error
            pMsj.style.fontSize="1.2rem";
            pMsj.textContent = "Error: El password puede combinar letras y números, mínimo 5 caracteres y máximo 10.";
            pMsj.appendChild(imgError);
            btnMsjAceptar.classList.add("hoverError");
            divMsj.classList.add("mostrarMsj");
        } else {
            // Usuario valido guardo boolean para comparar al final
            passwordCumple = true;
        }


        //si ambos cumplen mostrar msj,limpiar campos y enviar form
        //imagen de Ok para ingresar cuando cumple:
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
// VALIDAR FORMULARIO INGRESO  ******************************************************************************************

// //captura formingreso, user, pass, btnIngresar, divCardMsjsOkError, btnAceptar
// const formRegistro = document.getElementById("registroForm");
// const usuarioRegistro = document.getElementById("nombreIngresar");
// const passwordRegistro = document.getElementById("passwordIngresar");
// const divMsj = document.querySelector(".divMensaje");
// const btnIngresar = document.querySelector(".btnIngresar");
// const btnMsjAceptar = document.querySelector(".btnAceptar");







    // llave,parentesis y ; del document.addEventListener("DOMContentLoaded", () => {  Principal para 
    // ejecutar el js una vez este todo el html cargado...
 });



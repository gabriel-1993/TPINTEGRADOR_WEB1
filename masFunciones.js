


document.addEventListener("DOMContentLoaded", () => {

//Trabajo Práctico en JS realizado en WEB1 ULP :

// 1) Realiza un programa de nombre Ejercicio1.html, que funcione de la siguiente forma:

// a) El programa nos pregunta nuestro nombre.
// b) El programa nos pregunta nuestra edad.
// c) El programa da como resultado nuestro nombre y a continuación los días que
// hemos vivido hasta el momento.

//btn para ejecutar la consigna1
const btn1 = document.querySelector(".btn1");
const p1 = document.querySelector(".p1");


function ejercicio1() {
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");

    if (nombre !== null && edad !== null && nombre !== "" && edad !== "" && !isNaN(edad)) {
        let fechaActual = new Date();
        let fechaNacimiento = new Date();
        fechaNacimiento.setFullYear(fechaNacimiento.getFullYear() - parseInt(edad));
        let diferenciaEnMilisegundos = fechaActual - fechaNacimiento;
        let diasVividos = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

        p1.innerHTML = `Hola ${nombre}! Has vivido ${diasVividos} días hasta hoy.`;
        p1.style.color = "yellow";
    } else {
        p1.innerHTML = "❌ Error: Datos ingresados no válidos ❌";
        p1.style.color = "red";
    }
}

btn1.addEventListener('click', ejercicio1);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */


//2) Haz un programa que dibuje un rectángulo de asteriscos a partir de una base y altura especificada por el usuario.
const btn2 = document.querySelector(".btn2");
const p2 = document.querySelector(".p2");

function ejercicio2() {
    let altura = prompt("Ingrese la altura del rectangulo");
    let base = prompt("Ingrese la base del rectangulo");

    // parsear a enteros
    altura = parseInt(altura);
    base = parseInt(base);

    // valida que no esten los numeros vacios o sean igual o menor que 0
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        p2.innerHTML = "❌Error : datos mal ingresados !❌";
        p2.style.color = "yellow";
        p2.style.display = "flex";
        return;
    } else {
        // for anidados para imprimir el rectangulo
        let rectangulo = "";
        for (var i = 0; i < altura; i++) {
            for (var j = 0; j < base; j++) {
                rectangulo += "* ";
            }
            rectangulo += "<br>";
        }
        p2.innerHTML = rectangulo;
        p2.style.color = "yellow";
        p2.style.display ="block";
    }
}

btn2.addEventListener('click', ejercicio2);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

// 3) Analice y repare el código para que se impriman todos los valores excepto los números.
// var lista = new Array ('a','b','c','1','x','9',’d’,’4);
// var item ;
// for (item in lista)
// {
// if (lista[item] == "1" or “9”)
// break;
// console.log(lista[item]);
// }

const btn3 = document.querySelector(".btn3");
const p3 = document.querySelector(".p3");

function ejercicio3() {
    var item;
    var lista = ['a', 'b', 'c', '1', 'x', '9', 'd', '4'];
    for (var item of lista) {
        if (isNaN(item)) {
            p3.innerHTML += "'" + item + "'.";
            p3.style.display = "block";
            p3.style.color = "yellow";
        }
    }

}

btn3.addEventListener('click', ejercicio3);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

// Consigna 4 
// Haz un programa que escriba 50 números aleatorios enteros entre 1 y 6. Usar el método
//     random de la clase Math.
//     ( Para mayor información visita https://www.w3schools.com/js/js_math.asp )

const btn4 = document.querySelector(".btn4");
const p4 = document.querySelector(".p4");

function ejercicio4() {
    //por si ya lo ejecutaron que se borren todos los anteriores.
    p4.innerHTML = "";

    let numAleatorio;
    for (let i = 0; i < 50; i++) {
        numAleatorio = Math.floor(Math.random() * 6) + 1;
        console.log(numAleatorio);
        p4.innerHTML += `'${numAleatorio}' .`;
        p4.style.color = "yellow";
        p4.style.display = "block";
    }
}
btn4.addEventListener('click', ejercicio4);


//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */


/* Consigna 5
El programa “elige” un número al azar entre uno y un millón(lo cambio a diez) y pregunta por el mismo. El
visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva
ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número,
hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número
de intentos que ha realizado hasta el acierto */

let btn5 = document.querySelector(".btn5");
let p5 = document.querySelector(".p5");

function ejercicio5() {
    p5.innerHTML = "";
    numAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numAleatorio);
    let respuesta;
    let msj = "";
    respuesta = prompt("Vamos a adivinar un numero!, ingrese un numero entre 0 y 10 ");
    // Agregamos una comprobación para manejar el caso en que el usuario cancele el prompt.
    while (respuesta !== null) {
        respuesta = parseInt(respuesta);
        contador++;
        if (respuesta === numAleatorio) {
            p5.innerHTML = "🎇🎆🥳 ¡ADIVINASTE! 😅😅. Intentos: " + contador;
            p5.style.display = "block";
            p5.style.color = "yellow";
            // Salimos del bucle 
            break;
        } else if (respuesta > numAleatorio) {
            msj = "Ingrese un número más chico...";
        } else if (respuesta < numAleatorio) {
            msj = "Ingrese un número más grande...";
        }
        respuesta = prompt(msj); // Mostramos el mensaje actualizado.
    }
}

btn5.addEventListener('click', ejercicio5);


//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

// 6) Leer una cadena de texto desde un prompt y generar un array con la función split().
// Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra,
// última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la “a”
// hasta la “z” y las palabras ordenadas de la “z” hasta la ”a”.
const p6 = document.querySelector(".p6");
const btn6 = document.querySelector(".btn6")

function ejercicio6() {
    let resp = prompt("Ingrese una frase");
    let palabras = resp.split(" ");
    let num = palabras.length;
    // Ordenar palabras alfabéticamente de A a Z
    //slice puede copiar el array con un indice de principio y otro de final, o en este caso sin indices entre parentesis lo copia completo
    //sort ordena los elementos como cadenas caracteres(A-Z.0-9)
    const palabrasOrdenadasAZ = palabras.slice().sort();
    // Ordenar palabras alfabéticamente de Z a A
    //localeCompare se utiliza para comparar dos cadenas de caracteres de acuerdo con las reglas de ordenamiento 
    //locales del sistema. Devuelve un número negativo si la primera cadena es menor, un número positivo si la primera
    // cadena es mayor y 0 si son iguales en orden de clasificación. Es útil para ordenar cadenas alfabéticamente 
    //teniendo en cuenta las reglas de ordenamiento locales.
    const palabrasOrdenadasZA = palabras.slice().sort((a, b) => b.localeCompare(a));
    palabras = palabras.reverse();
    const p1 = palabras[palabras.length - 1];
    const pF = palabras[0];
    p6.style.display = "block";
    p6.style.color = "yellow";
    //Array con las palabras ingresadas
    p6.innerHTML = "Cantidad de palabras ingresadas : " + num + "<br>" +
        // indices invertidos en el array invertido
        " Primer palabra ingresada : " + p1 + "<br>" +
        " Ultima palabra ingresada : " + pF + "<br>" +
        "Orden inverso : " + palabras.join(" ") + "<br>" +
        "Palabras ordenadas de la A a la Z: " + palabrasOrdenadasAZ.join(" ") + "<br>" +
        "Palabras ordenadas de la Z a la A: " + palabrasOrdenadasZA.join(" ");
}
btn6.addEventListener('click', ejercicio6);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

// 7) Cree un archivo html que muestre una frase al azar cada vez que se cargue. Las frases
// deberán estar en otro archivo independiente, del tipo .js.
const p7 = document.querySelector(".p7");
const btn7 = document.querySelector(".btn7");

function ejercicio7() {
    let frases = ["Mereces lo que sueñas. -Gustavo Cerati", "Vive de instante en instante porque eso es la vida. -Facundo Cabral ", "Si estás atento al presente, el pasado no te distraerá, entonces serás siempre nuevo. -Facundo Cabral", "Y...con el diario del lunes...", "Cada dia trae su propio afan", "Consejos vendo y para mi no tengo", "Del dicho al hecho,hay un largo trecho"];
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    p7.style.display = "block";
    p7.style.color = "yellow";
    //ingreso la frase al Html con el indice aleatorio
    p7.innerHTML = frases[indiceAleatorio];
}
btn7.addEventListener('click', ejercicio7);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

// 8) Realice una página que permita al usuario cargar en un array una cantidad variable de
// números. Una vez finalizada la carga la página debe mostrar un resumen estadístico
// compuesto de los siguientes parámetros: Promedio, Mediana, Mínimo, Máximo y desviación
// estándar.

const btn8 = document.querySelector(".btn8");
const p8 = document.querySelector(".p8");

function ejercicio8() {
    let miArray = [];
    let num, suma = 0, promedio, min = Infinity, max = -Infinity;
    //ingresa los numeros y calcula promedio,min y max
    for (let i = 0; i < 4; i++) {
        num = prompt("Ingrese un numero entero");
        num = parseInt(num);
        suma += num;
        console.log("suma al instante" + suma);
        miArray.push(num);
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    console.log("prom fin for promedio" + promedio);
    promedio = suma / 4;

    //calcula mediana
    let mediana;
    miArray.sort((a, b) => a - b);
    const mitad = Math.floor(miArray.length / 2);
    if (miArray.length % 2 === 0) {
        // Si la longitud del array es par, toma el promedio de los dos valores del medio
        const valor1 = miArray[mitad - 1];
        const valor2 = miArray[mitad];
        mediana = (valor1 + valor2) / 2;
    } else {
        // Si la longitud del array es impar, toma el valor del medio
        mediana = miArray[mitad];
    }
    p8.style.display = "block";
    p8.style.color = "yellow";
    p8.innerHTML = "Promedio del grupo ingresado : " + promedio + "<br>" +
        " Mediana del grupo ingresado : " + mediana + "<br>" +
        " Minimo del grupo ingresado : " + min + "<br>" +
        "Maximo del grupo ingresado : " + max + "<br>";
}
btn8.addEventListener('click', ejercicio8);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

// 9) Realice una página que permita cargar los datos de una persona en un array. Luego la
// página deberá mostrar en una tabla html con las cabeceras adecuadas los datos solicitados.

const btn9 = document.querySelector(".btn9");
const p9 = document.querySelector(".p9");
function ejercicio9() {
    let resp;
    let persona = [];
    resp = prompt(" Ingrese su Nombre ");
    persona.push(resp);
    resp = prompt("Ingrese su Apellido");
    persona.push(resp);
    resp = prompt("Ingrese su telefono");
    persona.push(resp);
    resp = prompt("Ingrese su direccion");
    persona.push(resp);
    resp = prompt("Ingrese fecha de nacimiento: 00-00-0000");
    persona.push(resp);

    p9.innerHTML = "<table border='1'>" +
        "<tr>" +
        "<th>Nombre</th>" +
        "<th>Apellido</th>" +
        "<th>Teléfono</th>" +
        "<th>Dirección</th>" +
        "<th>Fecha de Nacimiento</th>" +
        "</tr>" +
        "<tr>" +
        "<td id='nombre'>" + persona[0] + "</td>" +
        "<td id='apellido'>" + persona[1] + "</td>" +
        "<td id='telefono'>" + persona[2] + "</td>" +
        "<td id='direccion'>" + persona[3] + "</td>" +
        "<td id='fechaNacimiento'>" + persona[4] + "</td>" +
        "</tr>" +
        "</table>";

    p9.style.display = "block";
    p9.style.color = "yellow";
}
btn9.addEventListener('click', ejercicio9);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

// 10) Realice una página que permita cargar una fecha en el formato DD-MM-YYYY y diga
// cuántos días faltan o ya pasaron respecto del día de hoy.

const btn10 = document.querySelector(".btn10");
const p10 = document.querySelector(".p10");
function ejercicio10() {
    //fecha ingresada 
    const fechaString = prompt("Ingrese una fecha dividida por guiones: dia-mes-año 00-00-0000");
    //guarda la fecha string,  separada(-) en un array
    let fechaArray = fechaString.split("-");
    //creo un tipo de dato fecha y le asigno los valores desde el array
    let fechaDate = new Date();
    fechaDate.setFullYear(fechaArray[2]);
    fechaDate.setMonth(fechaArray[1] - 1);
    fechaDate.setDate(fechaArray[0]);

    let resultado = "";
    const fechaHoy = new Date();
    if (fechaDate > fechaHoy) {
        // Calcula la diferencia en milisegundos entre las fechas
        const diferenciaMilisegundos = fechaDate - fechaHoy;
        // Convierte la diferencia a días
        resultado = "Faltan " + Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24)) + " días.";
        p10.innerHTML = resultado;
    }
    if (fechaDate < fechaHoy) {
        // Calcula la diferencia en milisegundos entre las fechas
        const diferenciaMilisegundos = fechaHoy - fechaDate;
        // Convierte la diferencia a días
        resultado = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
        p10.innerHTML = "Pasaron " + resultado + " dias.";
    } else {
        resultado = " Ingreso el dia actual. ES HOY !!!!";
        p10.innerHTML = resultado;
    }

    p10.style.color = "yellow";
    p10.style.display = "block";
}

btn10.addEventListener('click', ejercicio10);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

// 11) Realice una página que permita cargar una fecha cargando el día, mes y año por
// separado, verifique si es válida e informe la fecha si lo es o diga que es inválida.
const btn11 = document.querySelector(".btn11");
const p11 = document.querySelector(".p11");

function ejercicio11() {
    let dia = prompt("Ingrese el dia 01 hasta 31");
    let mes = prompt("Ingrese el mes 01 hasta 12");
    let anio = prompt("Ingrese el año ej: 2023");

    //parsea strings a enteros
    dia = parseInt(dia);
    mes = parseInt(mes);
    anio = parseInt(anio);

    //validar los datos 
    if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && !isNaN(dia) && !isNaN(mes) && !isNaN(anio)) {
        let fechaDate2 = new Date();
        fechaDate2.setDate(dia);
        fechaDate2.setMonth(mes - 1);
        fechaDate2.setFullYear(anio);
        p11.innerHTML = "Fecha ingresada: " + fechaDate2;
    } else {
        p11.innerHTML = " Datos ingresados , no validos.";
    }
    p11.style.display = "block";
    p11.style.color = "yellow";
}
btn11.addEventListener('click', ejercicio11);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

/*PARTE B

1) Realiza una página que muestre un formulario y verifique la entrada de un número que
esté comprendido entre 1 y 100. */

const btn1b = document.querySelector(".btn1b");
const p1b = document.querySelector(".p1b");

function ejercicio1b() {
    p1b.innerHTML = `
        <form class="miForm">
            <label style="color: yellow; margin-right: 10px;" for="numIngresado">Ingrese un número del 1 al 100</label>
            <input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" id="numIngresado" name="numIngresado">
            <input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow;" type="submit" value="Verificar">
        </form>
    `;

    p1b.style.display = "block";
    p1b.style.color = "yellow";

    const miFormulario = document.querySelector(".miForm");

    miFormulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const numIngresado = parseInt(document.getElementById("numIngresado").value);

        if (!isNaN(numIngresado) && numIngresado >= 1 && numIngresado <= 100) {
            p1b.innerHTML = "";
            p1b.innerHTML = `El número ${numIngresado} está dentro del rango (1-100).`;
            p1b.style.color = "yellow";
        } else if (isNaN(numIngresado)) {
            p1b.innerHTML = "";
            p1b.innerHTML = "Error en el tipo de dato: debe ingresar un número.";
            p1b.style.color = "red";
        } else {
            p1b.innerHTML = "";
            p1b.innerHTML = `Error: El número ${numIngresado} NO está dentro del rango (1-100).`;
            p1b.style.color = "red";
        }
    });
}

btn1b.addEventListener('click', ejercicio1b);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

const btn2b = document.querySelector(".btn2b");
const p2b = document.querySelector(".p2b");

function ejercicio2b() {
    p2b.innerHTML = '<h3>Ingresar Datos</h3>' +

        // Nombre y Apellido tipe text
        '<form class="miForm" style="display: flex; justify-content: space-between; flex-direction: column;gap:10px ;">' +
        '<label style="color: yellow; margin-right: 10px;" for="nombre">Nombre:</label>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" id="nombre" name="nombre">' +
        '<label style="color: yellow; margin-right: 10px;" for="apellido">Apellido:</label>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" id="apellido" name="apellido">' +

        // Genero radio-btn dentro de un div para evitar direction column  
        '<div style="padding:0; width:100%;border:none;box-shadow: none;display: flex; flex-direction: row;gap :5px;">' +
        '<label style="color: yellow; margin-right: 5px;">Género:</label>' +
        '<label for="masculino">Masculino</label>' +
        '<input type="radio" id="masculino" name="genero" value="masculino">' +
        '<label for="femenino">Femenino</label>' +
        '<input type="radio" id="femenino" name="genero" value="femenino">' +
        '<label for="otro">Otro</label>' +
        '<input type="radio" id="otro" name="genero" value="otro">' +
        '</div>' +

        //Fecha de nacimiento dentro de un div para evitar direction column 
        '<div style="padding:0;width:100%;border:none;box-shadow: none;display: flex; flex-direction: row;gap :14px;">' +
        '<label for="fechaNacimiento" style="color: yellow; margin-right: 10px";>Fecha de Nacimiento:</label>' +
        '<input style="color:black; background-color:yellow; "type="date" id="fechaNacimiento" name="fechaNacimiento"></div>' +

        //Email 
        '<label for="correoElectronico"style="color: yellow; margin-right: 10px";>Correo Electrónico:</label>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;"type="email" id="correoElectronico" name="correoElectronico"></input>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow;" type="submit" value="Enviar">' +
        '</form>';
    p2b.style.display = "block";
    p2b.style.color = "yellow";

    //Capturamos el formulario en JS 
    const miFormulario = document.querySelector(".miForm");
    //nombre imput
    const nombreInput = document.getElementById("nombre");
    //apellido imput
    const apellidoInput = document.getElementById("apellido");

    //Previene que se actualize la pagina y se pierda el dato
    miFormulario.addEventListener("submit", function (event) {

        event.preventDefault();

        //VALIDAR NOMBRE:
        let nombreCumple = false;
        let nombre = nombreInput.value.trim().toUpperCase();
        if (nombre === '') {
            alert('Por favor, ingresa tu nombre.');
            nombre.focus();
            nombreCumple = false;
        }
        // La expresión /^[a-zA-Z\s]+$/ es una expresión regular para verificar
        //contiene solo letras (mayusculas o minusculas) y espacios en blanco:
        // esta negado : ! para mostrar el msj para un nom mal ingresado
        else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            alert('Error: solo puedes ingresar letras y/o espacios');
            nombre.focus();
            nombreCumple = false;
        } else {
            // Envia el formulario si la validacion es exitosa
            nombreCumple = true;
        }

        //VALIDAR APELLIDO:
        let apellidoCumple = false;
        let apellido = apellidoInput.value.trim().toUpperCase();
        if (apellido === '') {
            alert('Error: Ingrese su apelldio');
            apellido.focus();
            apellidoCumple = false;
        }
        // La expresión /^[a-zA-Z\s]+$/ es una expresión regular para verificar
        //contiene solo letras (mayusculas o minusculas) y espacios en blanco:
        // esta negado : ! para mostrar el msj para un nom mal ingresado
        else if (!/^[a-zA-Z\s]+$/.test(apellido)) {
            alert('Error: solo debe contener letras y/o espacios');
            apellidoInput.focus();
            apellidoCumple = false;
        } else {
            // Envia el formulario si la validacion es exitosa
            apellidoCumple = true;
        }

        //VALIDAR GENERO :
        let generoCumple = false;
        //  3 input con el mismo input name genero
        let generoRadios = document.querySelectorAll('input[name="genero"]');
        let generoSeleccionado = false;

        // Recorrer(forEach()) todos los radio buttons para verificar si uno esta seleccionado
        generoRadios.forEach(function (radio) {
            if (radio.checked) {
                generoSeleccionado = true;
            }
        });

        // Verificar si se selecciono un genero
        if (generoSeleccionado) {
            generoCumple = true;
        } else {
            generoCumple = false;
            alert('Por favor, selecciona un género antes de continuar.');
        }

        //VALIDAR FECHA :
        let fechaCumple = false;
        // Obtener el elemento de entrada de fecha
        let fechaNacimientoInput = document.getElementById('fechaNacimiento');

        // Obtener el valor ingresado en el campo de fecha
        let fechaNacimiento = fechaNacimientoInput.value;

        // Obtener la fecha actual en formato  (YYYY-MM-DD)
        //1. new date() crea la fecha actual(hoy)
        //2. toISOString() en el objeto Date. Este método convierte la fecha y 
        //la hora en una cadena de texto en formato ISO 8601.Ej: "2023-09-22T14:30:00.000Z"
        //3. split('T') en esa cadena. Esto divide la cadena en dos partes en función de la 
        //letra "T" que separa la fecha de la hora en el formato ISO 8601. La parte izquierda 
        //(indice 0) contiene la fecha y la parte derecha (indice 1) contiene la hora.  
        //por lo tanto en fechaActual quedaria: 2023-09-22
        let fechaActual = new Date().toISOString().split('T')[0];

        if (fechaNacimiento === '') {
            fechaCumple = false;
            alert('Por favor, ingresa tu fecha de nacimiento.');
        } else if (fechaNacimiento > fechaActual) {
            fechaCumple = false;
            alert('La fecha de nacimiento no puede ser en el futuro.');
        } else {
            fechaCumple = true;
        }


        //VALIDAR CORREO ELECTRONICO :
        let correoCumple = false;
        // Obtener el elemento de entrada de correo electronico
        let correoElectronicoInput = document.getElementById('correoElectronico');

        let correoElectronico = correoElectronicoInput.value.trim().toUpperCase();;

        // la sig expresion valida si hay letras azAZ,num09,simbolos ._-, un @,nuevamente lo anterior, un punto, azAZ entre 2 O 4 caracteres
        let regexCorreoElectronico = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (correoElectronico === '') {
            cumple = false;
            alert('Por favor, ingresa tu correo electronico.');
        } else if (!regexCorreoElectronico.test(correoElectronico)) {
            correoCumple = false;
            alert('Por favor, ingresa un correo electrónico válido.');
        } else {
            correoCumple = true;
        }
        // validacion final si todas son true hace submit
        let formCumple = false;
        if (nombreCumple && apellidoCumple && generoCumple && fechaCumple && correoCumple) {
            formCumple = true;
        }
        if (formCumple) {
            miFormulario.submit();
            alert("Formulario enviado con exito.");
        }
    });
}


btn2b.addEventListener('click', ejercicio2b);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

//Consigna 3b

// Realizar un formulario donde: la longitud del nombre sea mayor de cuatro caracteres. El
// nombre sólo debe contener caracteres del alfabeto español (no contiene números ni
// caracteres no alfanuméricos). La edad sólo debe contener números y estar comprendido
// entre 18 y 30. La dirección de correo debe incluir una arroba y su longitud sea superior a
// cinco caracteres.

const btn3b = document.querySelector(".btn3b");
const p3b = document.querySelector(".p3b");

function ejercicio3b() {
    p3b.innerHTML = '<h3>Ingresar Datos</h3>' +
        '<form class="miForm" style="display: flex; justify-content: space-between; flex-direction: column; gap:10px;">' +
        '<label style="color: yellow; margin-right: 10px;" for="nombre">Nombre:</label>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" id="nombre" name="nombre">' +

        '<label style="color: yellow; margin-right: 10px;" for="edad">Edad:</label>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" id="edad" name="edad">' +

        '<label for="correoElectronico" style="color: yellow; margin-right: 10px;">Correo Electrónico:</label>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="email" id="correoElectronico" name="correoElectronico">' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow;" type="submit" value="Enviar">' +
        '</form>';
    p3b.style.display = "block";
    p3b.style.color = "yellow";

    // Capturamos el formulario en JS
    const miFormulario = document.querySelector(".miForm");
    // nombre input
    const nombreInput = document.getElementById("nombre");
    // edad input
    const edadInput = document.getElementById("edad");
    // correo electrónico input
    const correoInput = document.getElementById("correoElectronico");

    // Evento de envío del formulario
    miFormulario.addEventListener("submit", function (event) {
        event.preventDefault();

        //guarda los valores ingresados
        const nombre = nombreInput.value.trim().toUpperCase();
        const edad = edadInput.value.trim().toUpperCase();
        const correo = correoInput.value.trim().toUpperCase();

        // validar el nombre
        let nombreCumple = false;
        const nombreExpresion = /^[A-Za-zÁ-ú]+$/; // Solo letras del alfabeto español
        if (nombre.match(nombreExpresion) && nombre.length > 4) {
            nombreCumple = true;
        } else {
            nombreCumple = false;
            nombreInput.value = "";
            nombre.value = "";
            alert("El nombre debe contener caracteres del alfabeto español mínimo 4 letras (no debe tener números ni símbolos).");
        }

        // validar la edad
        let edadCumple = false;
        let edadEntero = parseInt(edad);

        if (!isNaN(edadEntero) && edadEntero >= 18 && edadEntero <= 30) {
            edadCumple = true;
        } else {
            edadCumple = false;
            alert("Debe ingresar una edad entre 18 y 30.");
        }

        // validar el correo electrónico
        // Expresión: correo debe incluir una arroba y su longitud sea superior a cinco caracteres
        const correoExpresion = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (correo.includes("@") && correo.length > 5 && correo.match(correoExpresion)) {
            correoCumple = true;
        } else {
            correoCumple = false;
            alert("La dirección de correo debe incluir una arroba y su longitud debe ser superior a cinco caracteres.");
        }

        if (nombreCumple && edadCumple && correoCumple) {
            //datos validos, envia el form
            miFormulario.submit();
            alert("Formulario enviado con éxito.");
        }
    });
}

btn3b.addEventListener('click', ejercicio3b);

//************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************** */

//Consigna 4b
// Realice un formulario para la carga de datos de un CD. Realice las validaciones
// correspondientes. Por medio de un botón agregar canción se debe habilitar una línea nueva
// para cargar la canción (nombre, compositor, duración).

const btn4b = document.querySelector(".btn4b");
const p4b = document.querySelector(".p4b");


// Funcion para ejecutar dentro de la funcion de la consigna 4b, cuando reciba un click agregar album, se va mostrar el form
// y al darle click en agregar cancion se validan los datos antes de hacer el submit

function cargarValidarCanciones() {

    //Album nombre input
    const nombreAlbumInput = document.getElementById("nombreAlbum");
    //guarda nombre album ingresado sin espacios en mayuscula
    const nombreAlbum = nombreAlbumInput.value.trim().toUpperCase();
    // validar el nombre album
    let nombreAlbumCumple = false;

    //permitir letras mayusculas y minusculas, numeros, espacios en blanco, guiones y parentesis 
    const nombreExpresion = /^[A-Za-z0-9\s\-()]+$/;

    if (nombreAlbum.match(nombreExpresion)) {
        nombreAlbumCumple = true;
    } else {
        nombreAlbumCumple = false;
        nombreAlbumInput.value = "";
        nombreAlbum.value = "";
        alert("Nombre obligatorio: puede ingresar letras mayusculas y minusculas, numeros, espacios en blanco, guiones y parentesis ");
    }

    // el btn agregar album va agregar los datos para la cancion , solo cuando tenga nombre el album
    // div para agregar las canciones
    if (nombreAlbumCumple) {

        // agrega form para los datos de las canciones y el div al final para ingresar canciones
        p4b.innerHTML =
            '<h3>Ingresar canciones</h3>' +
            '<form class="miForm" style="display: flex; justify-content: space-between; flex-direction: column; gap:10px;">' +
            '<label style="color: yellow; margin-right: 10px;" for="nombre">Nombre:</label>' +
            '<input style="width:100%;background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" id="nombre" name="nombre">' +

            '<label style="color: yellow; margin-right: 10px;" for="compositor">Compositor:</label>' +
            '<input style="width:100%;background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" id="compositor" name="compositor">' +

            '<label for="duracion" style="color: yellow; margin-right: 10px;">Duracion :</label>' +
            '<input style="width:100%;background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" placeholder="MM:SS 02:40" id="duracion" name="duracion">' +
            '<buttom class="btnAgregarCancion" Cancion style="cursor: pointer;border:solid 1px yellow; background-color: rgb(19, 18, 18); padding: 10px; color: yellow;text-align:center;font-weight:500; font-size:1rem;">Agregar Canción</buttom>' +
            '<input style="cursor: pointer;border:solid 1px yellow; background-color: rgb(19, 18, 18); padding: 10px; color: yellow;font-weight:600;font-size:1rem;" type="submit" value="Album Finalizado">' +
            '</form>' +
            '<div class="canciones" style="display:none; flex-direction:column;width:auto;box-shadow:none; padding:2px; margin-top:8px;border-radius:0px;";></div>';
        p4b.style.display = "block";
        p4b.style.color = "yellow";



        // Capturamos el formulario en JS
        const miFormulario = document.querySelector(".miForm");
        // nombre input
        const nombreInput = document.getElementById("nombre");
        // compositor input
        const compositorInput = document.getElementById("compositor");
        // duracion input
        const duracionInput = document.getElementById("duracion");

        //Boton agregar cancion
        const btnAgregarCancion = document.querySelector(".btnAgregarCancion");

        //div para guardar canciones dentro del p4b
        const cancionesDiv = document.querySelector(".canciones");

        //evento en el btn agregar canciones para validar los datos 
        btnAgregarCancion.addEventListener('click', function () {
            //guarda los valores ingresados
            const nombre = nombreInput.value.trim().toUpperCase();
            const compositor = compositorInput.value.trim().toUpperCase();
            const duracion = duracionInput.value.trim();

            // validar el nombre
            let nombreCumple = false;
            //permitir letras mayusculas y minusculas, numeros, espacios en blanco, guiones y parentesis 
            const nombreExpresion = /^[A-Za-z0-9\s\-()]+$/;

            if (nombre === "") {
                nombreCumple = false;
                alert("Error: Ingrese el nombre de la canción");
            } else
                if (nombre.match(nombreExpresion)) {
                    nombreCumple = true;
                }
                else {
                    nombreCumple = false;
                    nombreInput.value = "";
                    nombre.value = "";
                    alert("Error: El nombre debe estar formado por letras mayúsculas o minúsculas, números, espacios en blanco, guiones y paréntesis ");
                }

            // validar  compositor
            let compositorCumple = false;

            //permitir letras mayusculas y minusculas, numeros, espacios en blanco, guiones y parentesis 
            if (compositor.match(nombreExpresion)) {
                compositorCumple = true;
            } else
                if (compositor === "") {
                    compositorCumple = false;
                    alert("Error: Ingrese el nombre del compositor");
                } else {
                    compositorCumple = false;
                    compositorInput.value = "";
                    compositor.value = "";
                    alert("Error: El compositor debe estar formado por letras mayusculas o minusculas, numeros, espacios en blanco, guiones y parentesis ");
                }

            // validar duracion del album
            let duracionCumple = false;

            if (duracion.length === 0) {
                duracionCumple = false;
                alert("Error: debe ingresar duracion del album.(EJ: 01:30 para indicar 1 hora y media");
            } else {

                // expresion regular permite minutos desde "00" hasta "59" y segundos desde "00" hasta "59".
                const formatoDuracion = /^([0-5][0-9]):([0-5][0-9])$/;

                if (formatoDuracion.test(duracion)) {
                    duracionCumple = true;
                } else {
                    alert("Formato de duración de la cancion no válido. Use MM:SS.");
                }
            }
            if (nombreCumple && compositorCumple && duracionCumple) {
                cancionesDiv.style.display = "block";
                nombreInput.value = "";
                compositorInput.value = "";
                duracionInput.value = "";
                cancionesDiv.innerHTML +=
                    '<p style="padding: 2px; margin: 2px;">Nombre: ' + nombre + '</p>' +
                    '<p style="padding: 2px; margin: 2px;">Compositor: ' + compositor + '</p>' +
                    '<p style="padding: 2px; margin: 2px; border-bottom: 1px solid yellow;">Duración: ' + duracion + '</p>';
              
            }
        })

        // Evento de envío del formulario
        miFormulario.addEventListener("submit", function (event) {
            event.preventDefault();

            //guarda los valores ingresados
            const nombre = nombreInput.value.trim().toUpperCase();
            const compositor = compositorInput.value.trim().toUpperCase();
            const duracion = duracionInput.value.trim();

            if (nombre === "" && compositor === "" && duracion === "") {
                miFormulario.submit();
                alert("Album " + nombreAlbum +" guardado con éxito!");
            } else {
                alert("Error: quedan datos sin guardar en los campos de texto")
            }
        });
    }
}

// funcion principal del ejercicio 4b 
function ejercicio4b() {
    p4b.style.display = "block";
    p4b.style.color = "yellow";
    p4b.innerHTML = '<h3>Ingresar nuevo album</h3>' +
        '<label for="nombreAlbum" style="color: yellow; margin-right: 10px;">Nombre del Album :</label>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text"  id="nombreAlbum" name="nombreAlbum">' +
        '<button class="newAlbum" style="margin-top:10px; border: solid 1px yellow;box-shadow:none;width: 100%; font-size: 0.8rem";>Agregar album</button>';


    const btnNewAlbum = document.querySelector(".newAlbum");
    //Al hacer click en btn agregar album, que se muestre el form para cada cancion
    btnNewAlbum.addEventListener('click', cargarValidarCanciones);
}
btn4b.addEventListener('click', ejercicio4b);

});
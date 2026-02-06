let txtPeso = document.getElementById("txtPeso");
let txtEstatura = document.querySelector("#txtEstatura");

let btnCalcularIMC = document.querySelector("#btnCalcularIMC");

let parrafoResultado = document.querySelector("#sctResultadoIMC p");

/* Forma incorrecta 
var nombreGato = "Stella"; */

// Forma correcta
let nombrePerro = "Mia";

let nombreCabra;
nombreCabra = "Amber";
nombreCabra = "Amatista";
console.log(nombreCabra);

// Constantes
const PI = 3.14;
console.log(PI);

const MAXIMO_USUARIOS = 1000;

// Función 
/* Crear una función para calcular el IMC con la siguiente fórmula:
IMC = peso / estatura^2
Mostrar en la consola un mensaje que diga "El IMC es: --"
Datos de prueba en kg       m       IMC
                    80      1.7     27.7
                    60      1.8     18.5
*/

function calcularIMC() {
    let peso = txtPeso.value;
    let estatura = txtEstatura.value;

    if (validarCamposVacios() === false) {
        let imc = peso / Math.pow(estatura, 2); // estatura * estura
        parrafoResultado.innerText = imc.toFixed(2);
    } else {
        Swal.fire({
            title: "No se pudo calcular el IMC",
            text: "Por favor revise los campos resaltados",
            icon: "error", 
            confirmButtonText: "Aceptar"
        });
    }
}

function validarCamposVacios() {
    let error = false; // Inicializar por defecto en false asumiendo que no hay errores
    if (txtPeso.value === "") {
        txtPeso.classList.add("input-error");
        error = true;
    } else {
        txtPeso.classList.remove("input-error");
    }
    if (txtEstatura.value === "") {
        txtEstatura.classList.add("input-error");
        error = true;
    } else {
        txtEstatura.classList.remove("input-error");
    }
    return error;
}

/*
Ejercicio 1: Crear una función para convertir temperaturas entre Celsius y Fahrenheit.

Diseñar una función llamada convertirTemperatura que convierta una temperatura entre grados Celsius (°C) y Fahrenheit (°F) según la unidad solicitada. 

Datos de prueba:    Temperatura     Escala      Resultado esperado
                    25              F           77
                    32              C           0
                    "100"           C           Error
                    0               a           Error
*/
function convertirTemperatura(temperatura, escala) {
    // Validaciones  
    if (typeof temperatura !== "number") {
        return "Error: temperatura debe ser un número";
    }
    if (escala !== "C" && escala !== "F") {
        return "Error: unidad no válida (use 'C' o 'F')";
    }

    // Conversión  
    let resultado;
    if (escala === "C") {  //Opcional: escala.toLowerCase() o escala.toUpperCase()
        resultado = (temperatura - 32) * 5 / 9; // Fahrenheit a Celsius  
    } else {
        resultado = (temperatura * 9 / 5) + 32; // Celsius a Fahrenheit  
    }

    // Opcional:Redondeo a 2 decimales parseFloat(resultado.toFixed(2));   
    return resultado.toFixed(2);
}

console.log(convertirTemperatura(25, "F"));   // 77 (25°C → 77°F)  
console.log(convertirTemperatura(32, "C"));   // 0 (32°F → 0°C)  
console.log(convertirTemperatura("100", "C"));// "Error: temperatura debe ser un número"  
console.log(convertirTemperatura(0, "X"));    // "Error: unidad no válida..."  

/*
Ejercicio 2: Crear una función para verificar si una palabra es un palíndromo

Diseñar una función llamada esPalindromo que determine si una palabra se lee igual de izquierda a derecha que de derecha a izquierda.

Datos de prueba:    Palabra         Resultado esperado 
                    analina         Es
                    reconocer       No es

Nota: Puede usar split(), reverse(), join() o toLowerCase(), sin embargo, debe investigar su uso.
*/

function esPalindromo(palabra) {
    let palabraInvertida = palabra.split("").reverse().join("");
    // Validar  
    if (palabra === palabraInvertida) {
        console.log("La palabra " + palabra + " es un palíndromo");
    } else {
        console.log("La palabra " + palabra + " no es un palíndromo");
    }
}

esPalindromo("reconocer");     // si  
esPalindromo("casa");         // no  
esPalindromo("anilina");         // si  


/*
Ejercicio 3: Crear una función que simule una "bola mágica" que responda preguntas de forma aleatoria.
La función debe:
 - Recibir una pregunta como parámetro.
 - Generar una respuesta aleatoria de un conjunto predefinido de respuestas.
- Devolver la respuesta junto con la pregunta original.
- Las respuestas posibles deben incluir: "Sí", "No", "Tal vez", "Probablemente", "Es poco probable", "Definitivamente", y "No cuentes con ello".
*/

function bolaMagica(pregunta) {
    // Verificar se tenga como dato de entrada una pregunta
    if (!pregunta || typeof pregunta !== 'string') {
        console.log("Por favor, haz una pregunta válida.");
    }

    // Respuestas predefinidas
    const RESPUESTAS = ["Sí", "No", "Tal vez", "Probablemente", "Es poco probable", "Definitivamente", "No cuentes con ello"];

    // Generar índice aleatorio
    const INDICE_ALEATORIO = Math.floor(Math.random() * RESPUESTAS.length);

    // Obtener respuesta aleatoria
    let respuesta = RESPUESTAS[INDICE_ALEATORIO];

    // Devolver pregunta y respuesta
    console.log("Pregunta: " + pregunta + "\nRespuesta: " + respuesta);
}

bolaMagica("¿Voy a aprobar el examen?");
bolaMagica("¿Debo cambiar de trabajo?");
bolaMagica("¿Es hoy un buen día?");

/*
Ejercicio 4: Crear una función que determine si un sistema de riego automático debe activarse basándose en:

- La hora del día (se activa sólo entre las 18:00 y las 6:00).
- El nivel de humedad (se activa sólo si la humedad es inferior al 30%).
La función debe:
- Recibir la hora actual (formato de 24 horas) y el porcentaje de humedad.
- Devolver un mensaje indicando si el sistema se activa o no y por qué.
- Validar que los parámetros estén dentro de rangos válidos.
*/


btnCalcularIMC.addEventListener("click", calcularIMC);
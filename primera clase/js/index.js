let txtPeso = document.getElementById("textPeso");
let txtEstatura = document.querySelector("#txtEstatura");

let btnCalcularIMC = document.querySelector("#btnCalcularIMC");

let parrafoResultado = document.querySelector("#sctResultadoIMC p");


function calcularIMC() {
    let peso = txtPeso.value;
    let estatura = txtEstatura.value;
    if (validarCamposVacios() === false) {
        let imc = peso / Math.pow(estatura, 2);
        parrafoResultado.innerText = imc.toFixed(2);
    } else {
        Swal.fire({
  title: "No se pudo calcular el IMC",
  text: "Por favor revise los campos resaltados",
  icon: "Error",
  confirmButtonText: "Aceptar"
});


    }
}

function validarCamposVacios(){
    let error = false; //Inicializar por defecto en false asumiendo que no haya errores
    if(txtPeso.value ===""){
        txtPeso.classList.add("input-error");
        error = true;
    } else {
        txtPeso.classList.remove("input-error");
    }
    if(txtEstatura.value ===""){
        txtEstatura.classList.add("input-error");
        error = true;

    } else {
        txtEstatura.classList.remove("input-error");
    }
    return error;

}

//practica
// Bola magica 

function bolaMagica(pregunta) {
    if (typeof pregunta !== "string" || pregunta.trim() === "") {
        console.log("Error: debes hacer una pregunta valida");
        return;
    }

    let respuestas = [
        "Sí",
        "No",
        "Tal vez",
        "Probablemente",
        "Es poco probable",
        "Definitivamente",
        "No cuentes con ello"
    ];

    // Número aleatorio
    let indiceAleatorio = Math.floor(Math.random() * respuestas.length);

    // Respuesta seleccionada
    let respuesta = respuestas[indiceAleatorio];

    // mostrar resultado
    console.log("Pregunta: " + pregunta);
    console.log("Respuesta: " + respuesta);
}


/* otro ejemplo
function bolaMagica(pregunta){
    const Lista = ["Sí", "No", "Tal vez", "Probablemente", "Es poco probable", "Definitivamente","No cuentes con ello"];
    const RANDOM_INDEX = Math.floor(Math.random() * Lista.length);
    let respuesta = Lista[RANDOM_INDEX];
    console.log(pregunta + respuesta);}

bolaMagica("Hoy es lunes? ");
bolaMagica("Mañana va a llover? ")
    const randomIndex = Math.floor(Math.random() * Lista.length);
    let respuesta = Lista[randomIndex];
    console.log(pregunta + respuesta);

bolaMagica("Hoy es lunes? "); */

// ejemplos

bolaMagica("Voy a comer helado?");
bolaMagica("Voy a dormir?")

//Palindromo

function esPalindromo(palabra) {

    // Validar que sea una palabra valida
    if (typeof palabra !== "string" || palabra.trim() === "") {
        console.log("Error: ingresa una palabra valida");
        return;
    }

    // minusculas
    let palabraLimpia = palabra.toLowerCase();

    // Invertir 
    let palabraInvertida = palabraLimpia
        .split("")    // Convierte el texto en un arreglo de letras
        .reverse()    // Invierte el arreglo
        .join("");    // Une nuevamente en texto

    // Comparar palabra original con la invertida
    if (palabraLimpia === palabraInvertida) {
        console.log("Palabra:", palabraLimpia);
        console.log("Resultado: Es palíndromo");
    } else {
        console.log("Palabra:", palabraLimpia);
        console.log("Resultado: No es palíndromo");
    }
}


/*Forma incorrecta
var nombreGato = "Stella"; */

//Forma Correcta
let nombrePerro = "Mia";

let nombreCabra;
nombreCabra = "Amber";
nombreCabra = "Amatista";
console.log(nombreCabra);

//practica
let nombreTia = "Marta"

let nombreColor;
nombreColor = "Rojo"
nombreColor = "Verde"
console.log(nombreColor);

// Constantes
const PI = 3.14;
console.log(PI);

//CONSTANTES QUE PODRIAMOS USAR
const MAXIMO_USUARIOS = 1000;


// Funcion podemos reutilizar
/* Crear una función para calcular el IMC con la siguiente fórmula:
IMC = peso / estatura^2
Mostrar en la consola un mensaje que diga "El IMC es: --"
Datos de prueba en kg       m       IMC
                    80      1.7     27.7
                    60      1.8     18.5
*/

// !== === para diferente 


btnCalcularIMC.addEventListener("click", calcularIMC);

let txtPeso = document.getElementById("txtPeso");
let txtEstatura = document.querySelector("#txtEstatura");

let btnCalcularIMC = document.querySelector("#btnCalcularIMC");

let parrafoResultado = document.querySelector("#sctResultadoIMC p");

/* Forma incorrecta
var nombreCabra = "Stella": */

//Forma correcta
// let nombrePerro = "Michy";

// let nombreGato;
// nombreCabra = "Godzilla";
// nombreCabra = "Issis";
// console.log(nombrePerro);

// // Constantes
// const PI = 3.14;
// console.log(PI);

// const MAXIMO_USUARIOS = 1000;

// Funcion
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
        let imc = peso / Math.pow(estatura, 2);  // estatura * estatura
        parrafoResultado.innerText = imc.toFixed(2);
    }
    else {
        Swal.fire({
            title: "No se pudo calcular el IMC",
            text: "Por favor revise los campos resaltados",
            icon: "error",
            confirmButtonText: "Aceptar"
        });
    }
}

function validarCamposVacios() {
    let error = false; // Inicializar por defecto en false asumiento que no hay errores
    if (txtPeso.value === "") {
        txtPeso.classList.add("input-error");
        error = true;
    }
    else {
        txtPeso.classList.remove("input-error");
    }

    if (txtEstatura.value === "") {
        txtEstatura.classList.add("input-error");
        error = true;
    }
    else {
        txtEstatura.classList.remove("input-error");
    }
    return error;
}

// calcularIMC(80, 1.7)
// calcularIMC(60, 1.8)
// calcularIMC(-77, 1.68)
// calcularIMC("77", 1.68)
// calcularIMC(0.8, 0.68)


// // Practica funciones
// function palindromo(palabra) {
//     let pal = "";
//     if (palabra == palabra.split('').reverse().join('')) {
//         pal = "Es un palindromo";
//     }
//     else {
//         pal = "No es un palindromo";
//     }
//     console.log(pal);
// }

// palindromo("analina")
// palindromo("reconocer")



btnCalcularIMC.addEventListener("click", calcularIMC);
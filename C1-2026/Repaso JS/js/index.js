let txtPeso = document.getElementById("txtPeso");
let txtAltura = document.querySelector("#txtAltura");
let btnCalcularIMC = document.getElementById("btnCalcularIMC");
let parrafoResultado = document.querySelector("#sctResultadoIMC p");

/*let string = "Mi nombre es: ";
let nombre;
nombre = "Juan Pérez";
let edad = 30;
console.log(string + nombre + " y tengo " + edad + " años.");*/
btnCalcularIMC.addEventListener("click", calcularIMC);
function calcularIMC() {
  let peso = txtPeso.value;
  let altura = txtAltura.value;
  if (validarCamposVacios() === false || peso <= 0 || altura <= 0) {
    console.log("Error: Peso y altura deben ser números positivos.");
  } else {
    let imc = peso / Math.pow(altura, 2);
    console.log("El IMC es: " + imc);
    parrafoResultado.innerText = "El IMC es: " + imc.toFixed(2);
  }
}

function validarCamposVacios() {
  let error = false;
  if (txtPeso.value === "") {
    txtPeso.classList.add("input-error");
    error = true;
  } else {
    txtPeso.classList.remove("input-error");
  }
  if (txtAltura.value === "") {
    txtAltura.classList.add("input-error");
    error = true;
  } else {
    txtAltura.classList.remove("input-error");
  }
  return error;
}
// calcularIMC(70, 1.75);)
// calcularIMC(-70, 1.75);

/**1. Crear una función para convertir temperaturas entre Celsius y Fahrenheit.

Diseñar una función llamada convertirTemperatura que convierta una temperatura entre grados Celsius (°C) y Fahrenheit (°F) según la unidad solicitada. 

Datos de prueba:    

Temperatura     Escala      Resultado esperado

          25              F           77

          32              C           0

        "100"           C           Error


           0               a           Error
function convertirTemperatura(temperatura, escala) {
  if (typeof temperatura !== "number") {
    console.log("Error: La temperatura debe ser un número.");
  } else if (escala === "F") {
    let fahrenheit = (temperatura * 9) / 5 + 32;
    console.log(temperatura + "°C son " + fahrenheit + "°F");
  } else if (escala === "C") {
    let celsius = ((temperatura - 32) * 5) / 9;
    console.log(temperatura + "°F son " + celsius + "°C");
  } else {
    console.log("Error: La escala debe ser 'C' o 'F'.");
  }
}

convertirTemperatura(25, "F");
convertirTemperatura(32, "C");
convertirTemperatura("100", "C");
convertirTemperatura(0, "a");

/*2. Crear una función para verificar si una palabra es un palíndromo

Diseñar una función llamada esPalindromo que determine si una palabra se lee igual de izquierda a derecha que de derecha a izquierda.

Datos de prueba:    

Palabra         Resultado esperado 

analina            Es palíndromo

reconocer       No es palíndromo

Nota: Puede usar split(), reverse(), join() o toLowerCase(), sin embargo, debe investigar su uso.
function esPalindromo(palabra) {
  let palabraMinuscula = palabra.toLowerCase();
  let palabraDividida = palabraMinuscula.split("");
  let palabraInvertida = palabraDividida.reverse();
  let palabraUnida = palabraInvertida.join("");
  if (palabraMinuscula === palabraUnida) {
    console.log(palabra + " es palíndromo");
  } else {
    console.log(palabra + " no es palíndromo");
  }
}

esPalindromo("analina");
esPalindromo("reconocer");*/

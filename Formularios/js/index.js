let txtPeso = document.getElementById("txtPeso");
let txtEstatura = document.querySelector("#txtEstatura");

let btnCalcularIMC = document.getElementById("btnCalcularIMC");
let parrafoResultado = document.querySelector("#sctResultado p");

let nombreGato = "Mia";

let nombreCabra;
nombreCabra = "Amber";
nombreCabra = "Gogoat";
console.log(nombreCabra);

// constantes
const PI = 3.14;
console.log(PI);

const MAXIMO_USUARIOS = 1000;

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

    if (validarCamposVacios () === false){
        let imc = peso / Math.pow(estatura, 2); //estatura * estatura
        parrafoResultado.innerText = imc.toFixed(2);
    } else{
        Swal.fire({
            title: "No se pudo calcular el IMC",
            text: "Por favor revise los campos resaltados",
            icon: "error",
            confirmButtonText: "Aceptar"
        });
    }
}


function validarCamposVacios(){
    let error = false; // si no hay error es falso, si lo hay cambia a true
    if(txtPeso.value === ""){
        txtPeso.classList.add("input-error")
        error = true;
    }else{
        txtPeso.classList.remove("input-error");
    }
    if(txtEstatura.value === ""){
        txtEstatura.classList.add("input-error")
        error = true;
    }else{
        txtEstatura.classList.remove("input-error");
    }
    return error;

}


function bolaMagica(pregunta) {
    const Lista = ["Sí", "No", "Tal vez", "Probablemente", "Es poco probable", "Definitivamente", "No cuentes con ello"];
    const RANDOM_INDEX = Math.floor(Math.random() * Lista.length);
    let respuesta = Lista[RANDOM_INDEX];
    console.log(pregunta + respuesta);
}

bolaMagica("Hoy es lunes? ");
bolaMagica("Mañana va a llover? ");


btnCalcularIMC.addEventListener("click", calcularIMC);

const inputNombre = document.getElementById("txtNombre");
const inputInstitucion = document.getElementById("txtInstitucion");
const inputDescripcion = document.querySelector("#txtDescripcion");
const btnRegistrar = document.querySelector("#btnRegistrarCertificacion");

const inputsRequeridos = document.querySelectorAll("input[required]"); // Seleccionar todos los inputs obligatorios

function validar() {
    let error = false;
    for (let i = 0; i < inputsRequeridos.length; i++) {
        if (inputsRequeridos[i].value === "") {
            error = true;
            // Optimizar: El mensaje de error debería indicar cuál es el input obligatorio que se debe completar
            Swal.fire({
                icon: "warning",
                title: "No se puede agregar la certificación",
                text: "Por favor complete todos los campos.",
                confirmButtonText: "Aceptar"
            });
        }
    }
    if (error === false) {
        registrarCertificacion();
    }
}

// Testear en consola
// function registrarCertificacion() {
//     console.log("Registrar certificación");
// }

function registrarCertificacion() {
    const datosCertificacion = {
        nombre: inputNombre.value,
        institucion: inputInstitucion.value,
        descripcion: inputDescripcion.value
    };
    fetch("http://localhost:3000/certificaciones", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(datosCertificacion)
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Certificación registrada correctamente",
                confirmButtonText: "Aceptar"
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "No se puede registrar la certificación",
                text: response,
                confirmButtonText: "Aceptar"
            });
        }
    });
}

btnRegistrar.addEventListener("click", validar);
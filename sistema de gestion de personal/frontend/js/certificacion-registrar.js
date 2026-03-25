const inputNombre = document.getElementById('txtNombre');
const inputInstitucion = document.getElementById('txtInstitución');
const inputDescripcion = document.getElementById('txtDescripcion');
const btnRegistrar = document.getElementById('btnRegistrarCertificacion');

const inputsRequeridos = document.querySelectorAll('input[required]'); // ✅ corregido el nombre

function registrarCertificacion(){
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
        if(response.ok){ 
            Swal.fire({
                icon: "success",
                title: "Certificación registrada correctamente",
                confirmButtonText: "Aceptar"
            });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "No se puede registrar la certificación",
                text: response,
                confirmButtonText: "Aceptar"
            });
        }
    });
}

/*function registrarCertificacion(){
    const datosCertificacion = {
        nombre: inputNombre.value,
        institucion: inputInstitucion.value,
        descripcion: inputDescripcion.value
    };

    fetch("http://localhost:3000/certificaciones", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosCertificacion) // ✅ envía los datos al backend
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}/* */

btnRegistrar.addEventListener('click', registrarCertificacion);
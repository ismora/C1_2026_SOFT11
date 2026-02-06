let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let nombreUsuario = document.getElementById("nombreUsuario");
let contraseña = document.getElementById("contraseña");
let confirmarContraseña = document.getElementById("confirmarContraseña");
let fechaNacimiento = document.getElementById("fechaNacimiento");
let genero = document.getElementById("genero");
let registrarBtn = document.getElementById("btnRegistrar");


function validarFormulario() {
    if (!validarEspaciosVacios()) {
        if (contraseña.value === confirmarContraseña.value) {
            Swal.fire({
                icon: "success",
                title: "Registro Exitoso",
                text: "¡Bienvenido " + nombreUsuario.value + "! Su registro se ha completado con éxito.",
                confirmButtonText: "Continuar",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error de Contraseña",
                text: "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.",
                confirmButtonText: "Entendido",
            });
        }
    }else {
            Swal.fire({
                icon: "error",
                title: "Espacios en blanco",
                text: "Por favor revise los campos resaltados.",
                confirmButtonText: "Entendido",
            });
        }
}

    function validarEspaciosVacios() {
        let error = false;
        if (nombre.value === "") {
            nombre.classList.add("input-error");
            error = true;
        } else {
            nombre.classList.remove("input-error");
        }
        if (apellido.value === "") {
            apellido.classList.add("input-error");
            error = true;
        } else {
            apellido.classList.remove("input-error");
        }
        if (nombreUsuario.value === "") {
            nombreUsuario.classList.add("input-error");
            error = true;
        } else {
            nombreUsuario.classList.remove("input-error");
        }
        if (contraseña.value === "") {
            contraseña.classList.add("input-error");
            error = true;
        } else {
            contraseña.classList.remove("input-error");
        }
        if (confirmarContraseña.value === "") {
            confirmarContraseña.classList.add("input-error");
            error = true;
        } else {
            confirmarContraseña.classList.remove("input-error");
        }
        if (fechaNacimiento.value === "") {
            fechaNacimiento.classList.add("input-error");
            error = true;
        } else {
            fechaNacimiento.classList.remove("input-error");
        }
        if (genero.value === "") {
            genero.classList.add("input-error");
            error = true;
        } else {
            genero.classList.remove("input-error");
        }
        if(contraseña.value !== confirmarContraseña.value){
            contraseña.classList.add("input-error");
            confirmarContraseña.classList.add("input-error");
            error = true;
        }else{
            contraseña.classList.remove("input-error");
            confirmarContraseña.classList.remove("input-error");
        }
        return error;
    }

    registrarBtn.addEventListener("click", validarFormulario);
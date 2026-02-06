let txtNombre = document.querySelector("#txtNombre");
let txtApellido = document.querySelector("#txtApellido");
let txtUsuario = document.querySelector("#txtUsuario");

let txtPassword = document.querySelector("#txtPassword");
let txtConfirmar = document.querySelector("#txtConfirmar");

let txtMes = document.querySelector("#txtMes");
let txtDia = document.querySelector("#txtDia");
let txtAnio = document.querySelector("#txtAnio");

let slGenero = document.querySelector("#slGenero");

let btnRegistrar = document.querySelector("#btnRegistrar");

function registrarUsuario() {

    if (validarCamposVacios() === false) {

        if (txtPassword.value !== txtConfirmar.value) {
            txtPassword.classList.add("input-error");
            txtConfirmar.classList.add("input-error");

            Swal.fire({
                title: "Error",
                text: "Las contraseñas no coinciden",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
            return;
        }

        Swal.fire({
            title: "Registro exitoso",
            text: "Usuario registrado correctamente",
            icon: "success",
            confirmButtonText: "Aceptar"
        });

    } else {
        Swal.fire({
            title: "Formulario incompleto",
            text: "Complete todos los campos",
            icon: "error",
            confirmButtonText: "Aceptar"
        });
    }
}

function validarCamposVacios() {

    let error = false;

    if (txtNombre.value === "") {
        txtNombre.classList.add("input-error");
        error = true;
    } else {
        txtNombre.classList.remove("input-error");
    }

    if (txtApellido.value === "") {
        txtApellido.classList.add("input-error");
        error = true;
    } else {
        txtApellido.classList.remove("input-error");
    }

    if (txtUsuario.value === "") {
        txtUsuario.classList.add("input-error");
        error = true;
    } else {
        txtUsuario.classList.remove("input-error");
    }

    if (txtPassword.value === "") {
        txtPassword.classList.add("input-error");
        error = true;
    } else {
        txtPassword.classList.remove("input-error");
    }

    if (txtConfirmar.value === "") {
        txtConfirmar.classList.add("input-error");
        error = true;
    } else {
        txtConfirmar.classList.remove("input-error");
    }

    if (txtMes.value === "") {
        txtMes.classList.add("input-error");
        error = true;
    } else {
        txtMes.classList.remove("input-error");
    }

    if (txtDia.value === "") {
        txtDia.classList.add("input-error");
        error = true;
    } else {
        txtDia.classList.remove("input-error");
    }

    if (txtAnio.value === "") {
        txtAnio.classList.add("input-error");
        error = true;
    } else {
        txtAnio.classList.remove("input-error");
    }

    if (slGenero.value === "") {
        slGenero.classList.add("input-error");
        error = true;
    } else {
        slGenero.classList.remove("input-error");
    }

    return error;
}

btnRegistrar.addEventListener("click", registrarUsuario);

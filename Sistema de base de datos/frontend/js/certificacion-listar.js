const tablaCertificaciones = document.getElementById("tblCertificaciones").querySelector("tbody"); 

async function cargarTabla(){
    fetch("http://localhost:3000/certificaciones", {
        method: "GET",
        headers: {
            "Content-Type": "Application/json"
        }
    }).then(response => response.json())
    .then(listaCertificaciones =>{
        tablaCertificaciones.innerHTML = ""; // Limpiar la tabla
        listaCertificaciones.forEach(certificacion =>{
            const fila = document.createElement("tr");
            // Comilla francesa (``), permite utilizar variables o expresiones en un string
            fila.innerHTML = `
                <td> ${certificacion.nombre} </td>
                <td> ${certificacion.institucion} </td>
                <td> ${certificacion.descripcion} </td>
            `;
            tablaCertificaciones.appendChild(fila);  // Agregar la fila al final
        })
    });
}

cargarTabla();
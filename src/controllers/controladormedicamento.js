import { registrarMedicamento } from "../services/servicioMedicamento.js";

let nombreMedicamento = document.getElementById("nombremedicamento");
let presentacionMedicamento = document.getElementById("presentacionmedicamento");
let dosisMedicamento = document.getElementById("dosismedicamento");
let laboratorioMedicamento = document.getElementById("laboratoriomedicamento");
let fechaCaducidadMedicamento = document.getElementById("caducidadmedicamento");
let contraIndicacionesMedicamento = document.getElementById("indicacionesmedicamento");
let registroMedicamento = document.getElementById("registromedicamento");
let tieneCopagoMedicamento = document.getElementById("copagomedicamento");

let botonRegistroMedicamento = document.getElementById("botonregistromedicamento");

// Función para validar el input en tiempo real
function validarInput(input, pattern) {
    if (input.value.trim() === "") {
        input.classList.remove("valid", "invalid");
    } else if (pattern.test(input.value)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}

// Validar cada campo en tiempo real
nombreMedicamento.addEventListener("input", function() {
    validarInput(nombreMedicamento, /^[a-zA-Z\s]+$/);  // Solo letras y espacios
});

presentacionMedicamento.addEventListener("input", function() {
    validarInput(presentacionMedicamento, /^.+$/);  // Cualquier texto
});

dosisMedicamento.addEventListener("input", function() {
    validarInput(dosisMedicamento, /^.+$/);  // Cualquier texto
});

laboratorioMedicamento.addEventListener("input", function() {
    validarInput(laboratorioMedicamento, /^[a-zA-Z\s]+$/);  // Solo letras y espacios
});

fechaCaducidadMedicamento.addEventListener("input", function() {
    validarInput(fechaCaducidadMedicamento, /^\d{4}-\d{2}-\d{2}$/);  // Formato de fecha yyyy-mm-dd
});

contraIndicacionesMedicamento.addEventListener("input", function() {
    validarInput(contraIndicacionesMedicamento, /^.+$/);  // Cualquier texto
});

registroMedicamento.addEventListener("input", function() {
    validarInput(registroMedicamento, /^[A-Za-z0-9]+$/);  // Solo letras y números
});

// Detectamos el evento en el botón de registro
botonRegistroMedicamento.addEventListener("click", function(evento) {
    evento.preventDefault();
    
    // Variables para verificar los estados de los campos
    let isEmpty = false;   // Si algún campo está vacío
    let isInvalid = false; // Si algún campo es inválido (rojo)
    let isValid = true;    // Si todos los campos son válidos (verde)

    // Recorremos todos los inputs y verificamos si están vacíos, inválidos o correctos
    let inputs = [nombreMedicamento, presentacionMedicamento, dosisMedicamento, laboratorioMedicamento, fechaCaducidadMedicamento, contraIndicacionesMedicamento, registroMedicamento];
    
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isEmpty = true;  // Si algún campo está vacío
        }
        if (input.classList.contains("invalid")) {
            isInvalid = true;  // Si algún campo es inválido (rojo)
        }
        if (input.classList.contains("valid")) {
            isValid = isValid && true;  // Si todos los campos son correctos
        }
    });

    // Validación final
    if (isEmpty) {
        // Si hay campos vacíos
        Swal.fire({
            title: "¡Error!",
            text: "Debes rellenar todos los campos del formulario.",
            icon: "error"
        });
    } else if (isInvalid) {
        // Si hay campos inválidos (marcados en rojo)
        Swal.fire({
            title: "¡Error!",
            text: "Debes ingresar de forma correcta los campos marcados en rojo.",
            icon: "error"
        });
    } else if (isValid) {
        // Si todos los campos son correctos (verdes)
        Swal.fire({
            title: "Datos enviados satisfactoriamente",
            text: "¡Los datos han sido enviados correctamente!",
            icon: "success"
        }).then(() => {
            // Aquí puedes realizar el envío del formulario o lo que necesites hacer
            let datosFormularioMedicamento = {
                nombre: nombreMedicamento.value,
                presentacion: presentacionMedicamento.value,
                dosis: dosisMedicamento.value,
                laboratorio: laboratorioMedicamento.value,
                fechaCaducidad: fechaCaducidadMedicamento.value,
                contraindicaciones: contraIndicacionesMedicamento.value,
                registro: registroMedicamento.value,
                tieneCopago: tieneCopagoMedicamento.checked
            };

            // Envío de los datos al backend
            console.log(datosFormularioMedicamento);
            registrarMedicamento(datosFormularioMedicamento)
            .then(function(respuestaBack){
                console.log(respuestaBack);
                Swal.fire({
                    title: "¡Registro Exitoso!",
                    text: "¡El medicamento ha sido registrado correctamente!",
                    icon: "success"
                }).then(() => {
                    window.location.href = "../views/dashboards/dashBoardMedicamento.html";  // Redirige al dashboard de Medicamentos
                });
            });
        });
    }
});

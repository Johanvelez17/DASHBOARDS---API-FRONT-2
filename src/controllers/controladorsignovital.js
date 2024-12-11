import { registrarSignosVitales } from "../services/servicioSignoVital.js";

// Controladores de formulario
let nombreSignoVital = document.getElementById("nombresignovital");
let valorSignoVital = document.getElementById("valorsignovital");
let fechaMedidaSignoVital = document.getElementById("fechamedidasignovital");
let botonRegistroSignoVital = document.getElementById("botonregistrosignovital");

// Función para validar el input en tiempo real
function validarInput(input, pattern) {
    if (input.value.trim() === "") {
        // Si el input está vacío, eliminamos las clases de validación
        input.classList.remove("valid", "invalid");
    } else if (pattern.test(input.value)) {
        // Si el valor es válido según el patrón, aplicamos la clase "valid"
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        // Si el valor no es válido según el patrón, aplicamos la clase "invalid"
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}

// Validar cada campo en tiempo real
nombreSignoVital.addEventListener("input", function() {
    validarInput(nombreSignoVital, /^[a-zA-Z\s]+$/);  // Solo letras y espacios
});

valorSignoVital.addEventListener("input", function() {
    validarInput(valorSignoVital, /^\d+(\.\d{1,2})?$/);  // Solo números y máximo 2 decimales
});

fechaMedidaSignoVital.addEventListener("input", function() {
    validarInput(fechaMedidaSignoVital, /^\d{4}-\d{2}-\d{2}$/);  // Formato de fecha yyyy-mm-dd
});

// Detectamos el evento en el botón de registro
botonRegistroSignoVital.addEventListener("click", function(evento) {
    evento.preventDefault();
    
    // Variables para verificar los estados de los campos
    let isEmpty = false;   // Si algún campo está vacío
    let isInvalid = false; // Si algún campo es inválido (rojo)
    let isValid = true;    // Si todos los campos son válidos (verde)

    // Recorremos todos los inputs y verificamos si están vacíos, inválidos o correctos
    let inputs = [nombreSignoVital, valorSignoVital, fechaMedidaSignoVital];
    
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
            let datosFormularioSignoVital = {
                nombre: nombreSignoVital.value,
                valor: valorSignoVital.value,
                fechaMedida: fechaMedidaSignoVital.value
            };

            // 6. Se envían los datos al backend
            console.log(datosFormularioSignoVital);
            registrarSignosVitales(datosFormularioSignoVital)
            .then(function(respuestaBack){
                console.log(respuestaBack);
                window.location.href = "../views/dashboards/dashBoardSignoVital.html";  // Redirige al dashboard de Signos Vitales
            });
        });
    }
});



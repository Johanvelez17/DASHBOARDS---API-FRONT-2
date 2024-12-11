import { registrarEnfermedad } from "../services/servicioEnfermedad.js";

// Obtención de los elementos del formulario
let nombreEnfermedad = document.getElementById("nombreenfermedad");
let sintomasEnfermedad = document.getElementById("sintomasenfermedad");
let clasificacionEnfermedad = document.getElementById("clasificacionenfermedad");
let gradoEnfermedad = document.getElementById("gradoenfermedad");
let probabilidadDeVidaEnfermedad = document.getElementById("probabilidadvidaenfermedad");

let botonRegistroEnfermedad = document.getElementById("botonregistroenfermedad");

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
nombreEnfermedad.addEventListener("input", function() {
    validarInput(nombreEnfermedad, /^[a-zA-Z\s]+$/);  // Solo letras y espacios
});

sintomasEnfermedad.addEventListener("input", function() {
    validarInput(sintomasEnfermedad, /^.+$/);  // Cualquier texto
});

clasificacionEnfermedad.addEventListener("input", function() {
    validarInput(clasificacionEnfermedad, /^[1-9][0-9]*$/);  // Solo números positivos
});

probabilidadDeVidaEnfermedad.addEventListener("input", function() {
    validarInput(probabilidadDeVidaEnfermedad, /^[0-9]+(\.[0-9]{1,2})?$/);  // Números con 2 decimales máximo
});

// Detectamos el evento en el botón de registro
botonRegistroEnfermedad.addEventListener("click", function(evento) {
    evento.preventDefault();
    
    // Variables para verificar los estados de los campos
    let isEmpty = false;   // Si algún campo está vacío
    let isInvalid = false; // Si algún campo es inválido (rojo)
    let isValid = true;    // Si todos los campos son válidos (verde)

    // Recorremos todos los inputs y verificamos si están vacíos, inválidos o correctos
    let inputs = [nombreEnfermedad, sintomasEnfermedad, clasificacionEnfermedad, gradoEnfermedad, probabilidadDeVidaEnfermedad];
    
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
            // Preparar los datos del formulario
            let datosFormularioEnfermedad = {
                nombre: nombreEnfermedad.value,
                sintomas: sintomasEnfermedad.value,
                clasificacion: parseInt(clasificacionEnfermedad.value), // Convertir a número entero
                grado: parseInt(gradoEnfermedad.value), // Convertir a número entero
                probabilidadVida: parseFloat(probabilidadDeVidaEnfermedad.value) // Convertir a número flotante
            };

            // Envío de los datos al backend
            registrarEnfermedad(datosFormularioEnfermedad)
            .then(function(respuestaBack) {
                console.log(respuestaBack);
                // Ahora solo mostramos la confirmación de éxito
                window.location.href = "../views/dashboards/dashBoardEnfermedad.html";  // Redirige al dashboard de Enfermedades
            }).catch(function(error) {
                console.error(error);
                Swal.fire({
                    title: "¡Error!",
                    text: "Hubo un problema al registrar la enfermedad.",
                    icon: "error"
                });
            });
        });
    }
});






/*
    private long id;
    private String nombre;
    private String sintomas;
    private String clasificacion;
    private String grado;
    private Double probabilidadVida;
*/
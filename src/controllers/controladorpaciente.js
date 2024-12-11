import { registrarPaciente } from "../services/servicioPaciente.js";

//OBJETIVO: Capturar los datos de un formulario 

//1. por cada input, select, textarea del formulario se crea una variable 
//2. por cada variable debo utilizar el DOM para asociar el html con javascript 

//CONTROLADOR DEL FORMULARIO

let nombrePaciente = document.getElementById("nombrepaciente");
let correoPaciente = document.getElementById("correopaciente");
let telefonoPaciente = document.getElementById("telefonopaciente");
let fechaNacimientoPaciente = document.getElementById("nacimientopaciente");
let ciudadPaciente = document.getElementById("ciudadpaciente");
let polizaPaciente = document.getElementById("polizapaciente");
let ipsPaciente = document.getElementById("ipspaciente");
let grupoIngresoPaciente = document.getElementById("ingresospaciente");
let fechaAfiliacionPaciente = document.getElementById("afiliacionpaciente");

// 3. Crear una variable para asociarla al id del boton que tengo en html

let botonRegistroPaciente = document.getElementById("botonregistropaciente");

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
nombrePaciente.addEventListener("input", function () {
    validarInput(nombrePaciente, /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/); // Solo letras y espacios
});

correoPaciente.addEventListener("input", function () {
    validarInput(correoPaciente, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/); // Validación email
});

telefonoPaciente.addEventListener("input", function () {
    validarInput(telefonoPaciente, /^[0-9]{10}$/); // Teléfono con 10 dígitos
});

ciudadPaciente.addEventListener("input", function () {
    validarInput(ciudadPaciente, /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/); // Solo letras y espacios
});

ipsPaciente.addEventListener("input", function () {
    validarInput(ipsPaciente, /^[A-Za-z0-9\s]+$/); // Solo letras, números y espacios
});

// Detectamos el evento en el botón de registro
botonRegistroPaciente.addEventListener("click", function (evento) {
    evento.preventDefault();
    
    // Variables para verificar los estados de los campos
    let isEmpty = false;   // Si algún campo está vacío
    let isInvalid = false; // Si algún campo es inválido (rojo)
    let isValid = true;    // Si todos los campos son válidos (verde)

    // Recorremos todos los inputs y verificamos si están vacíos, inválidos o correctos
    let inputs = [nombrePaciente, correoPaciente, telefonoPaciente, ciudadPaciente, ipsPaciente, grupoIngresoPaciente, fechaNacimientoPaciente, fechaAfiliacionPaciente];
    
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
            let datosFormularioPaciente = {
                nombres: nombrePaciente.value,
                fechaNacimiento: fechaNacimientoPaciente.value,
                ciudad: ciudadPaciente.value,
                correo: correoPaciente.value,
                telefono: telefonoPaciente.value,
                ips: ipsPaciente.value,
                grupoIngreso: grupoIngresoPaciente.value,
                tienePoliza: polizaPaciente.checked,
                fechaAfiliacion: fechaAfiliacionPaciente.value
            };

            // 6. Se envían los datos al backend
            console.log(datosFormularioPaciente);
            registrarPaciente(datosFormularioPaciente)
                .then(function (respuestaBack) {
                    console.log(respuestaBack);
                    window.location.href = "../views/dashboards/dashBoardPaciente.html"; // Redirige al dashboard de Pacientes
                });
        });
    }
});









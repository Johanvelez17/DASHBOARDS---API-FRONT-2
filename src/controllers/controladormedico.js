import { registrarMedico } from "../services/servicioMedico.js";

// OBJETIVO: Capturar los datos de un formulario para registrar un médico

// 1. Por cada input, select, textarea del formulario se crea una variable 
// 2. Por cada variable debo utilizar el DOM para asociar el HTML con JavaScript 

// CONTROLADOR DEL FORMULARIO
let nombreMedico = document.getElementById("nombremedico");
let matriculaProfesionalMedico = document.getElementById("matriculamedico");
let especialidadMedico = document.getElementById("especialidadmedico");
let salarioMedico = document.getElementById("salariomedico");
let ipsMedico = document.getElementById("ipsmedico");
let correoMedico = document.getElementById("correomedico");
let telefonoMedico = document.getElementById("telefonomedico");
let direccionMedico = document.getElementById("direccionmedico");
let disponibleFinDeSemanaMedico = document.getElementById("disponibilidadmedico");

// 3. Crear una variable para asociarla al id del botón que tengo en HTML
let botonRegistroMedico = document.getElementById("botonregistromedico");

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
nombreMedico.addEventListener("input", function() {
    validarInput(nombreMedico, /^[a-zA-Z\s]+$/);  // Solo letras y espacios
});

matriculaProfesionalMedico.addEventListener("input", function() {
    validarInput(matriculaProfesionalMedico, /^\d{7}$/);  // 7 dígitos
});

especialidadMedico.addEventListener("input", function() {
    validarInput(especialidadMedico, /^[a-zA-Z\s]+$/);  // Solo letras y espacios
});

salarioMedico.addEventListener("input", function() {
    validarInput(salarioMedico, /^\d+$/);  // Solo números (sin decimales)
});

ipsMedico.addEventListener("input", function() {
    validarInput(ipsMedico, /^[a-zA-Z0-9\s]+$/);  // Letras, números y espacios
});

correoMedico.addEventListener("input", function() {
    validarInput(correoMedico, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);  // Correo electrónico
});

telefonoMedico.addEventListener("input", function() {
    validarInput(telefonoMedico, /^\d{10}$/);  // 10 dígitos (número de teléfono)
});

direccionMedico.addEventListener("input", function() {
    validarInput(direccionMedico, /^[a-zA-Z0-9\s#-]+$/);  // Letras, números y algunos caracteres especiales
});

// Para el checkbox, solo verificamos si está marcado, pero no le damos las clases .valid o .invalid
disponibleFinDeSemanaMedico.addEventListener("change", function() {
    if (disponibleFinDeSemanaMedico.checked) {
        // Si está marcado, no aplica .valid o .invalid, solo lo mantienes sin afectar la validación del input
        disponibleFinDeSemanaMedico.classList.remove("invalid");
    } else {
        // Si no está marcado, igual eliminamos cualquier clase inválida
        disponibleFinDeSemanaMedico.classList.remove("valid", "invalid");
    }
});

// 4. Detectamos acciones o eventos en el botón
botonRegistroMedico.addEventListener("click", function(evento){
    evento.preventDefault();
    
    // Variables para verificar los estados de los campos
    let isEmpty = false;   // Si algún campo está vacío
    let isInvalid = false; // Si algún campo es inválido (rojo)
    let isValid = true;    // Si todos los campos son válidos (verde)

    // Recorremos todos los inputs y verificamos si están vacíos, inválidos o correctos
    let inputs = [nombreMedico, matriculaProfesionalMedico, especialidadMedico, salarioMedico, ipsMedico, correoMedico, telefonoMedico, direccionMedico];
    
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
            let datosFormularioMedico = {
                nombres: nombreMedico.value,
                matriculaProfesional: matriculaProfesionalMedico.value,
                especialidad: especialidadMedico.value,
                salario: salarioMedico.value,
                ips: ipsMedico.value,
                correo: correoMedico.value,
                telefono: telefonoMedico.value,
                direccionConsultorio: direccionMedico.value,
                disponibleFindesemana: disponibleFinDeSemanaMedico.checked
            };

            // 6. Se envían los datos al backend
            console.log(datosFormularioMedico);
            registrarMedico(datosFormularioMedico)
            .then(function(respuestaBack){
                console.log(respuestaBack);
                // Eliminamos el Swal.fire redundante
                window.location.href = "../views/dashboards/dashBoardMedico.html";  // Redirige al dashboard del médico
            });
        });
    }
});





// CODIGO ORIGINAL POR SI HAY FALLOS


/*
  import { registrarMedico } from "../services/servicioMedico.js";

// OBJETIVO: Capturar los datos de un formulario para registrar un médico

// 1. Por cada input, select, textarea del formulario se crea una variable 
// 2. Por cada variable debo utilizar el DOM para asociar el HTML con JavaScript 

// CONTROLADOR DEL FORMULARIO
let nombreMedico = document.getElementById("nombremedico");
let matriculaProfesionalMedico = document.getElementById("matriculamedico");
let especialidadMedico = document.getElementById("especialidadmedico");
let salarioMedico = document.getElementById("salariomedico");
let ipsMedico = document.getElementById("ipsmedico");
let correoMedico = document.getElementById("correomedico");
let telefonoMedico = document.getElementById("telefonomedico");
let direccionMedico = document.getElementById("direccionmedico");
let disponibleFinDeSemanaMedico = document.getElementById("disponibilidadmedico");

// 3. Crear una variable para asociarla al id del botón que tengo en HTML
let botonRegistroMedico = document.getElementById("botonregistromedico");

// 4. Detectamos acciones o eventos en el botón
botonRegistroMedico.addEventListener("click", function(evento){
    evento.preventDefault();
    
    // 5. Se crea un JSON que captura todos los datos del formulario
    let datosFormularioMedico = {
      nombres: nombreMedico.value,
      matriculaProfesional: matriculaProfesionalMedico.value,
      especialidad: especialidadMedico.value,
      salario: salarioMedico.value,
      ips: ipsMedico.value,
      correo: correoMedico.value,
      telefono: telefonoMedico.value,
      direccionConsultorio: direccionMedico.value,
      disponibleFindesemana: disponibleFinDeSemanaMedico.checked
    };
    
    // 6. Se envían los datos al backend
    console.log(datosFormularioMedico);
    registrarMedico(datosFormularioMedico)
    .then(function(respuestaBack){
        console.log(respuestaBack);
        Swal.fire({
          title: "Registro Exitoso",
          text: "Ya eres parte de nuestra gran familia!",
          icon: "success"
        }).then(()=>{
          window.location.href = "../views/dashboards/dashBoardMedico.html";  // Redirige al dashboard del médico
        });
    });
});

*/










document.getElementById("formularioMedico").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Recuperar todos los campos del formulario
    var nombremedico = document.getElementById("nombremedico");
    var matriculamedico = document.getElementById("matriculamedico");
    var salariomedico = document.getElementById("salariomedico");
    var telefonomedico = document.getElementById("telefonomedico");
    var correomedico = document.getElementById("correomedico");

    // Validación personalizada
    if (!nombremedico.value) {
        alert("El campo 'Nombres' es obligatorio.");
        nombremedico.focus();
        return false;
    }

    if (!matriculamedico.value || matriculamedico.value.length !== 7) {
        alert("La 'Matrícula Profesional' debe tener 7 dígitos.");
        matriculamedico.focus();
        return false;
    }

    if (!salariomedico.value) {
        alert("El campo 'Salario' es obligatorio.");
        salariomedico.focus();
        return false;
    }

    if (!telefonomedico.value) {
        alert("El campo 'Teléfono' es obligatorio.");
        telefonomedico.focus();
        return false;
    }

    if (!correomedico.value || !validateEmail(correomedico.value)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        correomedico.focus();
        return false;
    }

    // Si todo está bien, enviamos el formulario
    alert("Formulario enviado correctamente.");
    this.submit();
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
let nombreMedico = document.getElementById("nombremedico");
let matriculaProfesionalMedico = document.getElementById("matriculamedico");
let especialidadMedico = document.getElementById("especialidadmedico");
let salarioMedico = document.getElementById("salariomedico");
let ipsMedico = document.getElementById("ipsmedico");
let correoMedico = document.getElementById("correomedico");
let telefonoMedico = document.getElementById("telefonomedico");
let direccionMedico = document.getElementById("direccionmedico");
let disponibleFinDeSemanaMedico = document.getElementById("disponibilidadmedico");


let botonRegistroMedico = document.getElementById("botonregistromedico");

botonRegistroMedico.addEventListener("click", function(evento){

    evento.preventDefault();

    let datosFormularioMedico = {

        nombre: nombreMedico.value,
        matriculaProfesional: matriculaProfesionalMedico.value,
        especialidad: especialidadMedico.value,
        salario: salarioMedico.value,
        ips: ipsMedico.value,
        correo: correoMedico.value,
        telefono: telefonoMedico.value,
        direccionConsultorio:  direccionMedico.value,
        finDeSemanaDisponible: disponibleFinDeSemanaMedico.value
    }

    console.log(datosFormularioMedico);

    Swal.fire({
        title: "Registro Exitoso",
        text: "¡El registro de medico ha sido exitoso!",
        icon: "success"
    });

});

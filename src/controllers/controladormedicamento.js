let nombreMedicamento = document.getElementById("nombremedicamento");
let presentacionMedicamento = document.getElementById("presentacionmedicamento");
let dosisMedicamento = document.getElementById("dosismedicamento");
let laboratorioMedicamento = document.getElementById("laboratoriomedicamento");
let fechaCaducidadMedicamento = document.getElementById("caducidadmedicamento");
let contraIndicacionesMedicamento = document.getElementById("indicacionesmedicamento");
let registroMedicamento = document.getElementById("registromedicamento");
let tieneCopagoMedicamento = document.getElementById("copagomedicamento");

let botonRegistroMedicamento = document.getElementById("botonregistromedicamento");

botonRegistroMedicamento.addEventListener("click", function(evento){

    evento.preventDefault();

    let datosFormularioMedicamento = {

        nombre: nombreMedicamento.value,
        presentacion: presentacionMedicamento.value,
        dosis: dosisMedicamento.value,
        laboratorio: laboratorioMedicamento.value,
        fechaCaducidad: fechaCaducidadMedicamento.value,
        contraIndicaciones: contraIndicacionesMedicamento.value,
        registroInvima: registroMedicamento.value,
        copago: tieneCopagoMedicamento.value
    }

    console.log(datosFormularioMedicamento);

    Swal.fire({
        title: "Registro Exitoso",
        text: "¡Se ha registrado el medicamento satisfactoriamente!",
        icon: "success"
    });

})
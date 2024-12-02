import {registrarMedicamento} from "../services/servicioMedicamento.js";


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
        contraindicaciones: contraIndicacionesMedicamento.value,
        registro: registroMedicamento.value,
        tieneCopago: tieneCopagoMedicamento.value == "on" ? true : false
    }

    console.log(datosFormularioMedicamento)
    registrarMedicamento(datosFormularioMedicamento)
    .then(function(respuestaBack){
        console.log(respuestaBack)
        Swal.fire({
          title: "Registro Exitoso",
          text: "Ya eres parte de nuestra gran familia!",
          icon: "success"
        });
    })
})
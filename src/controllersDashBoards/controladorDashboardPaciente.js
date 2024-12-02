import { buscarPacientes } from "../services/servicioPaciente.js";


//CONTROLADOR DE DASHBOARDS

//OBJETIVO:Recibir datos del BACK y hacerles render (render = PINTARLOS)
//1. LLAMAR AL API

buscarPacientes()
.then(function(respuestaBack){
  console.log(respuestaBack)

  
  //2. CREAR UNA REFERENCIA A UNA ETIQUETA HTML DONDE VAMOS A RENDERIZAR
  let fila  = document.getElementById("fila");
  
  
  //3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
  respuestaBack.forEach(function(paciente){
    console.log(paciente);

      //4.Se crean columnas
  let columna = document.createElement("div");
  columna.classList.add("col")


  //5. Se crean tarjetas
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "p-5", "h-100", "shadow");


//6. Se crea una etiqueta para poner el nombre del paciente
let nombres = document.createElement("h2"); 
nombres.textContent = paciente.nombres;

let fechaNacimiento = document.createElement("p")
fechaNacimiento.textContent = paciente.fechaNacimiento;

let ciudad= document.createElement("p")
ciudad.textContent = paciente.ciudad;

let correo = document.createElement("p")
correo.textContent = paciente.correo;

let telefono = document.createElement("p")
telefono.textContent = paciente.telefono;

let ips = document.createElement("p")
ips.textContent = paciente.ips;

let grupoIngresos = document.createElement("p")
grupoIngresos.textContent = paciente.grupoIngresos;

let tienePoliza = document.createElement("p")
tienePoliza.textContent = paciente.tienePoliza;

let fechaAfiliacion = document.createElement("p")
fechaAfiliacion .textContent = paciente.fechaAfiliacion ;


//PASO FINAL (ORDENANDO LAS CARTAS)
    tarjeta.appendChild(nombres);
    tarjeta.appendChild(fechaNacimiento);
    tarjeta.appendChild(ciudad);
    tarjeta.appendChild(correo);
    tarjeta.appendChild(telefono);
    tarjeta.appendChild(ips);
    tarjeta.appendChild(grupoIngresos);
    tarjeta.appendChild(tienePoliza);
    tarjeta.appendChild(fechaAfiliacion);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);

  });

})


  
  



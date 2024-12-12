import { buscarPacientes } from "../services/servicioPaciente.js";

let cantidadPacientes = 0;
//CONTROLADOR DE DASHBOARDS

//OBJETIVO:Recibir datos del BACK y hacerles render (render = PINTARLOS)
//1. LLAMAR AL API

buscarPacientes()
.then(function(respuestaBack){
  console.log(respuestaBack)
  cantidadPacientes = respuestaBack.length;
  let contador = document.querySelector(".contador");
  console.log(contador)
  contador.textContent = cantidadPacientes;

  
  //2. CREAR UNA REFERENCIA A UNA ETIQUETA HTML DONDE VAMOS A RENDERIZAR
  let fila  = document.getElementById("fila");
  
  
  //3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
  respuestaBack.forEach(function(paciente){
    console.log(paciente);

      //4.Se crean columnas
  let columna = document.createElement("div");
  columna.classList.add("col")

// 5. Se crean tarjetas
let tarjeta = document.createElement("div");
tarjeta.classList.add("card", "p-5", "h-100", "shadow");
tarjeta.style.background = "#0084ff33";
tarjeta.style.textAlign = "center";  // Cambiar text-align a center
tarjeta.style.width = "380px";

// 6. Se crea una etiqueta para poner el nombre del paciente
let subtitulo = document.createElement("span");
subtitulo.textContent = "Nombre: ";
subtitulo.style.fontWeight = "bold";  // Subtítulo en negrita
subtitulo.style.color = "#0084ff";  // Cambiar color del subtítulo
subtitulo.style.marginRight = "10px";

let nombres = document.createElement("p"); 
nombres.textContent = paciente.nombres;
nombres.style.margin = "0"; 
nombres.style.display = "inline";
nombres.style.color = "#222";  // Cambiar color del párrafo a #222

// Crear contenedor para el nombre
let contenedorNombre = document.createElement("div");
contenedorNombre.style.display = "flex";  
contenedorNombre.style.alignItems = "center"; 
contenedorNombre.style.marginBottom = "10px";  // Separación entre campos

contenedorNombre.appendChild(subtitulo);
contenedorNombre.appendChild(nombres);

// Crear contenedor para fecha de nacimiento
let subtituloFechaNacimiento = document.createElement("span");
subtituloFechaNacimiento.textContent = "Fecha Nacimiento: ";
subtituloFechaNacimiento.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloFechaNacimiento.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloFechaNacimiento.style.marginRight = "10px";

let fechaNacimiento = document.createElement("p");
fechaNacimiento.textContent = paciente.fechaNacimiento;
fechaNacimiento.style.margin = "0";
fechaNacimiento.style.display = "inline";
fechaNacimiento.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorFechaNacimiento = document.createElement("div");
contenedorFechaNacimiento.style.display = "flex";
contenedorFechaNacimiento.style.alignItems = "center";
contenedorFechaNacimiento.style.marginBottom = "10px";

contenedorFechaNacimiento.appendChild(subtituloFechaNacimiento);
contenedorFechaNacimiento.appendChild(fechaNacimiento);

// Crear contenedor para ciudad
let subtituloCiudad = document.createElement("span");
subtituloCiudad.textContent = "Ciudad: ";
subtituloCiudad.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloCiudad.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloCiudad.style.marginRight = "10px";

let ciudad = document.createElement("p");
ciudad.textContent = paciente.ciudad;
ciudad.style.margin = "0";
ciudad.style.display = "inline";
ciudad.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorCiudad = document.createElement("div");
contenedorCiudad.style.display = "flex";
contenedorCiudad.style.alignItems = "center";
contenedorCiudad.style.marginBottom = "10px";

contenedorCiudad.appendChild(subtituloCiudad);
contenedorCiudad.appendChild(ciudad);

// Crear contenedor para correo
let subtituloCorreo = document.createElement("span");
subtituloCorreo.textContent = "Correo: ";
subtituloCorreo.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloCorreo.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloCorreo.style.marginRight = "10px";

let correo = document.createElement("p");
correo.textContent = paciente.correo;
correo.style.margin = "0";
correo.style.display = "inline";
correo.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorCorreo = document.createElement("div");
contenedorCorreo.style.display = "flex";
contenedorCorreo.style.alignItems = "center";
contenedorCorreo.style.marginBottom = "10px";

contenedorCorreo.appendChild(subtituloCorreo);
contenedorCorreo.appendChild(correo);

// Crear contenedor para telefono
let subtituloTelefono = document.createElement("span");
subtituloTelefono.textContent = "Teléfono: ";
subtituloTelefono.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloTelefono.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloTelefono.style.marginRight = "10px";

let telefono = document.createElement("p");
telefono.textContent = paciente.telefono;
telefono.style.margin = "0";
telefono.style.display = "inline";
telefono.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorTelefono = document.createElement("div");
contenedorTelefono.style.display = "flex";
contenedorTelefono.style.alignItems = "center";
contenedorTelefono.style.marginBottom = "10px";

contenedorTelefono.appendChild(subtituloTelefono);
contenedorTelefono.appendChild(telefono);

// Crear contenedor para IPS
let subtituloIps = document.createElement("span");
subtituloIps.textContent = "IPS: ";
subtituloIps.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloIps.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloIps.style.marginRight = "10px";

let ips = document.createElement("p");
ips.textContent = paciente.ips;
ips.style.margin = "0";
ips.style.display = "inline";
ips.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorIps = document.createElement("div");
contenedorIps.style.display = "flex";
contenedorIps.style.alignItems = "center";
contenedorIps.style.marginBottom = "10px";

contenedorIps.appendChild(subtituloIps);
contenedorIps.appendChild(ips);

// Crear contenedor para grupo de ingresos
let subtituloGrupoIngresos = document.createElement("span");
subtituloGrupoIngresos.textContent = "Grupo de Ingresos: ";
subtituloGrupoIngresos.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloGrupoIngresos.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloGrupoIngresos.style.marginRight = "10px";

let grupoIngresos = document.createElement("p");
grupoIngresos.textContent = paciente.grupoIngresos;
grupoIngresos.style.margin = "0";
grupoIngresos.style.display = "inline";
grupoIngresos.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorGrupoIngresos = document.createElement("div");
contenedorGrupoIngresos.style.display = "flex";
contenedorGrupoIngresos.style.alignItems = "center";
contenedorGrupoIngresos.style.marginBottom = "10px";

contenedorGrupoIngresos.appendChild(subtituloGrupoIngresos);
contenedorGrupoIngresos.appendChild(grupoIngresos);

// Crear contenedor para tienePoliza
let subtituloTienePoliza = document.createElement("span");
subtituloTienePoliza.textContent = "¿Tiene Póliza?: ";
subtituloTienePoliza.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloTienePoliza.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloTienePoliza.style.marginRight = "10px";

let tienePoliza = document.createElement("p");
tienePoliza.textContent = paciente.tienePoliza;
tienePoliza.style.margin = "0";
tienePoliza.style.display = "inline";
tienePoliza.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorTienePoliza = document.createElement("div");
contenedorTienePoliza.style.display = "flex";
contenedorTienePoliza.style.alignItems = "center";
contenedorTienePoliza.style.marginBottom = "10px";

contenedorTienePoliza.appendChild(subtituloTienePoliza);
contenedorTienePoliza.appendChild(tienePoliza);

// Crear contenedor para fecha de afiliación
let subtituloFechaAfiliacion = document.createElement("span");
subtituloFechaAfiliacion.textContent = "Fecha de Afiliación: ";
subtituloFechaAfiliacion.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloFechaAfiliacion.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloFechaAfiliacion.style.marginRight = "10px";

let fechaAfiliacion = document.createElement("p");
fechaAfiliacion.textContent = paciente.fechaAfiliacion;
fechaAfiliacion.style.margin = "0";
fechaAfiliacion.style.display = "inline";
fechaAfiliacion.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorFechaAfiliacion = document.createElement("div");
contenedorFechaAfiliacion.style.display = "flex";
contenedorFechaAfiliacion.style.alignItems = "center";
contenedorFechaAfiliacion.style.marginBottom = "10px";

contenedorFechaAfiliacion.appendChild(subtituloFechaAfiliacion);
contenedorFechaAfiliacion.appendChild(fechaAfiliacion);

// PASO FINAL (ORDENANDO LAS CARTAS)
tarjeta.appendChild(contenedorNombre);
tarjeta.appendChild(contenedorFechaNacimiento);
tarjeta.appendChild(contenedorCiudad);
tarjeta.appendChild(contenedorCorreo);
tarjeta.appendChild(contenedorTelefono);
tarjeta.appendChild(contenedorIps);
tarjeta.appendChild(contenedorGrupoIngresos);
tarjeta.appendChild(contenedorTienePoliza);
tarjeta.appendChild(contenedorFechaAfiliacion);

// Añadir tarjeta a la columna y luego a la fila
columna.appendChild(tarjeta);
fila.appendChild(columna);




  });

});



  
  



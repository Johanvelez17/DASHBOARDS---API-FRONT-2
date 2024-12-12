import {buscarMedicamentos} from "../services/servicioMedicamento.js"
 
let cantidadMedicamentos = 0;

//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 

buscarMedicamentos()
.then(function(respuestaBack){
  console.log(respuestaBack) 
  cantidadMedicamentos = respuestaBack.length;
  let contador = document.querySelector(".contador");
  contador.textContent = cantidadMedicamentos;

//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
respuestaBack.forEach(function(medicamento){
    console.log(medicamento);


    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");

// 5. Se crean tarjetas
let tarjeta = document.createElement("div");
tarjeta.classList.add("card", "p-5", "h-100", "shadow");
tarjeta.style.background = "#0088ff33"; // Fondo más suave para la tarjeta
tarjeta.style.width = "380px";

// 6. Se crea una etiqueta para poner el nombre del medicamento
let subtituloNombre = document.createElement("span");
subtituloNombre.textContent = "Nombre: ";
subtituloNombre.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloNombre.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloNombre.style.marginRight = "10px";

let nombre = document.createElement("p");
nombre.textContent = medicamento.nombre;
nombre.style.margin = "0";
nombre.style.display = "inline";
nombre.style.color = "#222";  // Cambiar color del párrafo a #222

// Crear contenedor para el nombre
let contenedorNombre = document.createElement("div");
contenedorNombre.style.display = "flex";
contenedorNombre.style.alignItems = "center";
contenedorNombre.style.marginBottom = "10px";  // Separación entre campos

contenedorNombre.appendChild(subtituloNombre);
contenedorNombre.appendChild(nombre);

// Crear contenedor para presentación
let subtituloPresentacion = document.createElement("span");
subtituloPresentacion.textContent = "Presentación: ";
subtituloPresentacion.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloPresentacion.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloPresentacion.style.marginRight = "10px";

let presentacion = document.createElement("p");
presentacion.textContent = medicamento.presentacion;
presentacion.style.margin = "0";
presentacion.style.display = "inline";
presentacion.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorPresentacion = document.createElement("div");
contenedorPresentacion.style.display = "flex";
contenedorPresentacion.style.alignItems = "center";
contenedorPresentacion.style.marginBottom = "10px";

contenedorPresentacion.appendChild(subtituloPresentacion);
contenedorPresentacion.appendChild(presentacion);

// Crear contenedor para dosis
let subtituloDosis = document.createElement("span");
subtituloDosis.textContent = "Dosis: ";
subtituloDosis.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloDosis.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloDosis.style.marginRight = "10px";

let dosis = document.createElement("p");
dosis.textContent = medicamento.dosis;
dosis.style.margin = "0";
dosis.style.display = "inline";
dosis.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorDosis = document.createElement("div");
contenedorDosis.style.display = "flex";
contenedorDosis.style.alignItems = "center";
contenedorDosis.style.marginBottom = "10px";

contenedorDosis.appendChild(subtituloDosis);
contenedorDosis.appendChild(dosis);

// Crear contenedor para laboratorio
let subtituloLaboratorio = document.createElement("span");
subtituloLaboratorio.textContent = "Laboratorio: ";
subtituloLaboratorio.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloLaboratorio.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloLaboratorio.style.marginRight = "10px";

let laboratorio = document.createElement("p");
laboratorio.textContent = medicamento.laboratorio;
laboratorio.style.margin = "0";
laboratorio.style.display = "inline";
laboratorio.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorLaboratorio = document.createElement("div");
contenedorLaboratorio.style.display = "flex";
contenedorLaboratorio.style.alignItems = "center";
contenedorLaboratorio.style.marginBottom = "10px";

contenedorLaboratorio.appendChild(subtituloLaboratorio);
contenedorLaboratorio.appendChild(laboratorio);

// Crear contenedor para fecha de caducidad
let subtituloFechaCaducidad = document.createElement("span");
subtituloFechaCaducidad.textContent = "Fecha de Caducidad: ";
subtituloFechaCaducidad.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloFechaCaducidad.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloFechaCaducidad.style.marginRight = "10px";

let fechaCaducidad = document.createElement("p");
fechaCaducidad.textContent = medicamento.fechaCaducidad;
fechaCaducidad.style.margin = "0";
fechaCaducidad.style.display = "inline";
fechaCaducidad.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorFechaCaducidad = document.createElement("div");
contenedorFechaCaducidad.style.display = "flex";
contenedorFechaCaducidad.style.alignItems = "center";
contenedorFechaCaducidad.style.marginBottom = "10px";

contenedorFechaCaducidad.appendChild(subtituloFechaCaducidad);
contenedorFechaCaducidad.appendChild(fechaCaducidad);

// Crear contenedor para contraindicaciones
let subtituloContraindicaciones = document.createElement("span");
subtituloContraindicaciones.textContent = "Contraindicaciones: ";
subtituloContraindicaciones.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloContraindicaciones.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloContraindicaciones.style.marginRight = "10px";

let contraindicaciones = document.createElement("p");
contraindicaciones.textContent = medicamento.contraindicaciones;
contraindicaciones.style.margin = "0";
contraindicaciones.style.display = "inline";
contraindicaciones.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorContraindicaciones = document.createElement("div");
contenedorContraindicaciones.style.display = "flex";
contenedorContraindicaciones.style.alignItems = "center";
contenedorContraindicaciones.style.marginBottom = "10px";

contenedorContraindicaciones.appendChild(subtituloContraindicaciones);
contenedorContraindicaciones.appendChild(contraindicaciones);

// Crear contenedor para registro
let subtituloRegistro = document.createElement("span");
subtituloRegistro.textContent = "Registro: ";
subtituloRegistro.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloRegistro.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloRegistro.style.marginRight = "10px";

let registro = document.createElement("p");
registro.textContent = medicamento.registro;
registro.style.margin = "0";
registro.style.display = "inline";
registro.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorRegistro = document.createElement("div");
contenedorRegistro.style.display = "flex";
contenedorRegistro.style.alignItems = "center";
contenedorRegistro.style.marginBottom = "10px";

contenedorRegistro.appendChild(subtituloRegistro);
contenedorRegistro.appendChild(registro);

// Crear contenedor para copago
let subtituloTieneCopago = document.createElement("span");
subtituloTieneCopago.textContent = "Tiene Copago: ";
subtituloTieneCopago.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloTieneCopago.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloTieneCopago.style.marginRight = "10px";

let tieneCopago = document.createElement("p");
tieneCopago.textContent = medicamento.tieneCopago;
tieneCopago.style.margin = "0";
tieneCopago.style.display = "inline";
tieneCopago.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorTieneCopago = document.createElement("div");
contenedorTieneCopago.style.display = "flex";
contenedorTieneCopago.style.alignItems = "center";
contenedorTieneCopago.style.marginBottom = "10px";

contenedorTieneCopago.appendChild(subtituloTieneCopago);
contenedorTieneCopago.appendChild(tieneCopago);

// PASO FINAL (ORDENANDO LAS CARTAS)
tarjeta.appendChild(contenedorNombre);
tarjeta.appendChild(contenedorPresentacion);
tarjeta.appendChild(contenedorDosis);
tarjeta.appendChild(contenedorLaboratorio);
tarjeta.appendChild(contenedorFechaCaducidad);
tarjeta.appendChild(contenedorContraindicaciones);
tarjeta.appendChild(contenedorRegistro);
tarjeta.appendChild(contenedorTieneCopago);

// Añadir tarjeta a la columna y luego a la fila
columna.appendChild(tarjeta);
fila.appendChild(columna); 
  
});

});

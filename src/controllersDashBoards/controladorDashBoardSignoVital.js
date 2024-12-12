import {buscarSignosVitales} from "../services/servicioSignoVital.js"

let cantidadSignosVitales = 0;
//OBJETIVO:Recibir datos del BACK y hacerles render (render = PINTARLOS)
//1. LLAMAR AL API

buscarSignosVitales()
.then(function(respuestaBack){
  console.log(respuestaBack)
  cantidadSignosVitales = respuestaBack.length;
  let contador = document.querySelector(".contador");
  contador.textContent = cantidadSignosVitales;

    //2. CREAR UNA REFERENCIA A UNA ETIQUETA HTML DONDE VAMOS A RENDERIZAR
    let fila=document.getElementById("fila");

    //3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
    respuestaBack.forEach(function(signoVital){
    console.log(signoVital);

    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


// 5. Se crean tarjetas
let tarjeta = document.createElement("div");
tarjeta.classList.add("card", "p-5", "h-100", "shadow");
tarjeta.style.background = "#0084ff33";
tarjeta.style.textAlign = "center";  // Cambiar text-align a center
tarjeta.style.width = "380px";

// 6. Se crea una etiqueta para poner el nombre del signo vital
let subtituloNombre = document.createElement("span");
subtituloNombre.textContent = "Nombre: ";
subtituloNombre.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloNombre.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloNombre.style.marginRight = "10px";

let nombre = document.createElement("p");
nombre.textContent = signoVital.nombre;
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

// Crear contenedor para valor
let subtituloValor = document.createElement("span");
subtituloValor.textContent = "Valor: ";
subtituloValor.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloValor.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloValor.style.marginRight = "10px";

let valor = document.createElement("p");
valor.textContent = signoVital.valor;
valor.style.margin = "0";
valor.style.display = "inline";
valor.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorValor = document.createElement("div");
contenedorValor.style.display = "flex";
contenedorValor.style.alignItems = "center";
contenedorValor.style.marginBottom = "10px";

contenedorValor.appendChild(subtituloValor);
contenedorValor.appendChild(valor);

// Crear contenedor para fecha de medida
let subtituloFechaMedida = document.createElement("span");
subtituloFechaMedida.textContent = "Fecha Medida: ";
subtituloFechaMedida.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloFechaMedida.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloFechaMedida.style.marginRight = "10px";

let fechamedida = document.createElement("p");
fechamedida.textContent = signoVital.fechaMedida;
fechamedida.style.margin = "0";
fechamedida.style.display = "inline";
fechamedida.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorFechaMedida = document.createElement("div");
contenedorFechaMedida.style.display = "flex";
contenedorFechaMedida.style.alignItems = "center";
contenedorFechaMedida.style.marginBottom = "10px";

contenedorFechaMedida.appendChild(subtituloFechaMedida);
contenedorFechaMedida.appendChild(fechamedida);

// PASO FINAL (ORDENANDO LAS CARTAS)
tarjeta.appendChild(contenedorNombre);
tarjeta.appendChild(contenedorValor);
tarjeta.appendChild(contenedorFechaMedida);

// Añadir tarjeta a la columna y luego a la fila
columna.appendChild(tarjeta);
fila.appendChild(columna);

    
    })
});

import {buscarEnfermedades} from "../services/servicioEnfermedad.js"

let cantidadEnfermedades = 0;
//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS
buscarEnfermedades()
.then(function(respuestaBack){
  console.log(respuestaBack) 
  cantidadEnfermedades = respuestaBack.length;
  let contador = document.querySelector(".contador");
  contador.textContent = cantidadEnfermedades;

//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
respuestaBack.forEach(function(enfermedad){
    console.log(enfermedad);
    
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");

// 5. Se crean tarjetas
let tarjeta = document.createElement("div");
tarjeta.classList.add("card", "p-5", "h-100", "shadow");

// Establecer fondo con color #0084ff33 (azul con opacidad)
tarjeta.style.backgroundColor = "#0084ff33"; // Fondo azul con opacidad

// 6. Se crea una etiqueta para poner el nombre de la enfermedad
let subtituloNombre = document.createElement("span");
subtituloNombre.textContent = "Nombre: ";
subtituloNombre.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloNombre.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloNombre.style.marginRight = "10px";

let nombre = document.createElement("p");
nombre.textContent = enfermedad.nombre;
nombre.style.margin = "0";
nombre.style.display = "inline";
nombre.style.color = "#222";  // Cambiar color del párrafo a #222
nombre.style.backgroundColor="transparent";

let contenedorNombre = document.createElement("div");
contenedorNombre.style.display = "flex";
contenedorNombre.style.alignItems = "center";
contenedorNombre.style.marginBottom = "10px";  // Separación entre campos
contenedorNombre.appendChild(subtituloNombre);
contenedorNombre.appendChild(nombre);

// Crear contenedor para síntomas
let subtituloSintomas = document.createElement("span");
subtituloSintomas.textContent = "Síntomas: ";
subtituloSintomas.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloSintomas.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloSintomas.style.marginRight = "10px";

let sintomas = document.createElement("p");
sintomas.textContent = enfermedad.sintomas;
sintomas.style.margin = "0";
sintomas.style.display = "inline";
sintomas.style.color = "#222";  // Cambiar color del párrafo a #222
sintomas.style.backgroundColor="transparent";

let contenedorSintomas = document.createElement("div");
contenedorSintomas.style.display = "flex";
contenedorSintomas.style.alignItems = "center";
contenedorSintomas.style.marginBottom = "10px";
contenedorSintomas.appendChild(subtituloSintomas);
contenedorSintomas.appendChild(sintomas);

// Crear contenedor para clasificación
let subtituloClasificacion = document.createElement("span");
subtituloClasificacion.textContent = "Clasificación: ";
subtituloClasificacion.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloClasificacion.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloClasificacion.style.marginRight = "10px";

let clasificacion = document.createElement("p");
clasificacion.textContent = enfermedad.clasificacion;
clasificacion.style.margin = "0";
clasificacion.style.display = "inline";
clasificacion.style.color = "#222";  // Cambiar color del párrafo a #222
clasificacion.style.backgroundColor="transparent";

let contenedorClasificacion = document.createElement("div");
contenedorClasificacion.style.display = "flex";
contenedorClasificacion.style.alignItems = "center";
contenedorClasificacion.style.marginBottom = "10px";
contenedorClasificacion.appendChild(subtituloClasificacion);
contenedorClasificacion.appendChild(clasificacion);

// Crear contenedor para grado
let subtituloGrado = document.createElement("span");
subtituloGrado.textContent = "Grado: ";
subtituloGrado.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloGrado.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloGrado.style.marginRight = "10px";

let grado = document.createElement("p");
grado.textContent = enfermedad.grado;
grado.style.margin = "0";
grado.style.display = "inline";
grado.style.color = "#222";  // Cambiar color del párrafo a #222
grado.style.backgroundColor="transparent";

let contenedorGrado = document.createElement("div");
contenedorGrado.style.display = "flex";
contenedorGrado.style.alignItems = "center";
contenedorGrado.style.marginBottom = "10px";
contenedorGrado.appendChild(subtituloGrado);
contenedorGrado.appendChild(grado);

// Crear contenedor para probabilidad de vida
let subtituloProbabilidadVida = document.createElement("span");
subtituloProbabilidadVida.textContent = "Probabilidad de vida: ";
subtituloProbabilidadVida.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloProbabilidadVida.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloProbabilidadVida.style.marginRight = "10px";

let probabilidadVida = document.createElement("p");
probabilidadVida.textContent = enfermedad.probabilidadVida;
probabilidadVida.style.margin = "0";
probabilidadVida.style.display = "inline";
probabilidadVida.style.color = "#222";  // Cambiar color del párrafo a #222
probabilidadVida.style.backgroundColor="transparent";

let contenedorProbabilidadVida = document.createElement("div");
contenedorProbabilidadVida.style.display = "flex";
contenedorProbabilidadVida.style.alignItems = "center";
contenedorProbabilidadVida.style.marginBottom = "10px";
contenedorProbabilidadVida.appendChild(subtituloProbabilidadVida);
contenedorProbabilidadVida.appendChild(probabilidadVida);

// PASO FINAL (ORDENANDO LAS CARTAS)
tarjeta.appendChild(contenedorNombre);
tarjeta.appendChild(contenedorSintomas);
tarjeta.appendChild(contenedorClasificacion);
tarjeta.appendChild(contenedorGrado);
tarjeta.appendChild(contenedorProbabilidadVida);

// Añadir tarjeta a la columna y luego a la fila
columna.appendChild(tarjeta);
fila.appendChild(columna);


});
});


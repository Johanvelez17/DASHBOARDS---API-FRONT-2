import {buscarMedicos} from "../services/servicioMedico.js"
let cantidadMedicos = 0;
//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. LLAMAR AL API
buscarMedicos()
.then(function(respuestaBack){
    console.log(respuestaBack)
    cantidadMedicos = respuestaBack.length;
    let contador = document.querySelector(".contador");
    contador.textContent = cantidadMedicos;

//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA

respuestaBack.forEach(function(medico){
    console.log(medico);


    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");

// 5. Se crean tarjetas
let tarjeta = document.createElement("div");
tarjeta.classList.add("card", "p-5", "h-100", "shadow");
tarjeta.style.background = "#0084ff33";
tarjeta.style.textAlign = "center";  // Cambiar text-align a center
tarjeta.style.width = "380px";

// 6. Se crea una etiqueta para poner el nombre del médico
let subtituloNombres = document.createElement("span");
subtituloNombres.textContent = "Nombre: ";
subtituloNombres.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloNombres.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloNombres.style.marginRight = "10px";

let nombres = document.createElement("p");
nombres.textContent = medico.nombres;
nombres.style.margin = "0";
nombres.style.display = "inline";
nombres.style.color = "#222";  // Cambiar color del párrafo a #222

// Crear contenedor para el nombre
let contenedorNombres = document.createElement("div");
contenedorNombres.style.display = "flex";
contenedorNombres.style.alignItems = "center";
contenedorNombres.style.marginBottom = "10px";  // Separación entre campos

contenedorNombres.appendChild(subtituloNombres);
contenedorNombres.appendChild(nombres);

// Crear contenedor para matrícula profesional
let subtituloMatriculaProfesional = document.createElement("span");
subtituloMatriculaProfesional.textContent = "Matrícula Profesional: ";
subtituloMatriculaProfesional.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloMatriculaProfesional.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloMatriculaProfesional.style.marginRight = "10px";

let matriculaProfesional = document.createElement("p");
matriculaProfesional.textContent = medico.matriculaProfesional;
matriculaProfesional.style.margin = "0";
matriculaProfesional.style.display = "inline";
matriculaProfesional.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorMatriculaProfesional = document.createElement("div");
contenedorMatriculaProfesional.style.display = "flex";
contenedorMatriculaProfesional.style.alignItems = "center";
contenedorMatriculaProfesional.style.marginBottom = "10px";

contenedorMatriculaProfesional.appendChild(subtituloMatriculaProfesional);
contenedorMatriculaProfesional.appendChild(matriculaProfesional);

// Crear contenedor para especialidad
let subtituloEspecialidad = document.createElement("span");
subtituloEspecialidad.textContent = "Especialidad: ";
subtituloEspecialidad.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloEspecialidad.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloEspecialidad.style.marginRight = "10px";

let especialidad = document.createElement("p");
especialidad.textContent = medico.especialidad;
especialidad.style.margin = "0";
especialidad.style.display = "inline";
especialidad.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorEspecialidad = document.createElement("div");
contenedorEspecialidad.style.display = "flex";
contenedorEspecialidad.style.alignItems = "center";
contenedorEspecialidad.style.marginBottom = "10px";

contenedorEspecialidad.appendChild(subtituloEspecialidad);
contenedorEspecialidad.appendChild(especialidad);

// Crear contenedor para salario
let subtituloSalario = document.createElement("span");
subtituloSalario.textContent = "Salario: ";
subtituloSalario.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloSalario.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloSalario.style.marginRight = "10px";

let salario = document.createElement("p");
salario.textContent = medico.salario;
salario.style.margin = "0";
salario.style.display = "inline";
salario.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorSalario = document.createElement("div");
contenedorSalario.style.display = "flex";
contenedorSalario.style.alignItems = "center";
contenedorSalario.style.marginBottom = "10px";

contenedorSalario.appendChild(subtituloSalario);
contenedorSalario.appendChild(salario);

// Crear contenedor para IPS
let subtituloIps = document.createElement("span");
subtituloIps.textContent = "IPS: ";
subtituloIps.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloIps.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloIps.style.marginRight = "10px";

let ips = document.createElement("p");
ips.textContent = medico.ips;
ips.style.margin = "0";
ips.style.display = "inline";
ips.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorIps = document.createElement("div");
contenedorIps.style.display = "flex";
contenedorIps.style.alignItems = "center";
contenedorIps.style.marginBottom = "10px";

contenedorIps.appendChild(subtituloIps);
contenedorIps.appendChild(ips);

// Crear contenedor para correo
let subtituloCorreo = document.createElement("span");
subtituloCorreo.textContent = "Correo: ";
subtituloCorreo.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloCorreo.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloCorreo.style.marginRight = "10px";

let correo = document.createElement("p");
correo.textContent = medico.correo;
correo.style.margin = "0";
correo.style.display = "inline";
correo.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorCorreo = document.createElement("div");
contenedorCorreo.style.display = "flex";
contenedorCorreo.style.alignItems = "center";
contenedorCorreo.style.marginBottom = "10px";

contenedorCorreo.appendChild(subtituloCorreo);
contenedorCorreo.appendChild(correo);

// Crear contenedor para teléfono
let subtituloTelefono = document.createElement("span");
subtituloTelefono.textContent = "Teléfono: ";
subtituloTelefono.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloTelefono.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloTelefono.style.marginRight = "10px";

let telefono = document.createElement("p");
telefono.textContent = medico.telefono;
telefono.style.margin = "0";
telefono.style.display = "inline";
telefono.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorTelefono = document.createElement("div");
contenedorTelefono.style.display = "flex";
contenedorTelefono.style.alignItems = "center";
contenedorTelefono.style.marginBottom = "10px";

contenedorTelefono.appendChild(subtituloTelefono);
contenedorTelefono.appendChild(telefono);

// Crear contenedor para dirección del consultorio
let subtituloDireccionConsultorio = document.createElement("span");
subtituloDireccionConsultorio.textContent = "Dirección Consultorio: ";
subtituloDireccionConsultorio.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloDireccionConsultorio.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloDireccionConsultorio.style.marginRight = "10px";

let direccionConsultorio = document.createElement("p");
direccionConsultorio.textContent = medico.direccionConsultorio;
direccionConsultorio.style.margin = "0";
direccionConsultorio.style.display = "inline";
direccionConsultorio.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorDireccionConsultorio = document.createElement("div");
contenedorDireccionConsultorio.style.display = "flex";
contenedorDireccionConsultorio.style.alignItems = "center";
contenedorDireccionConsultorio.style.marginBottom = "10px";

contenedorDireccionConsultorio.appendChild(subtituloDireccionConsultorio);
contenedorDireccionConsultorio.appendChild(direccionConsultorio);

// Crear contenedor para fin de semana disponible
let subtituloFinDeSemanaDisponible = document.createElement("span");
subtituloFinDeSemanaDisponible.textContent = "Fin de Semana Disponible: ";
subtituloFinDeSemanaDisponible.style.fontWeight = "bold";  // Subtítulo en negrita
subtituloFinDeSemanaDisponible.style.color = "#0084ff";  // Cambiar color del subtítulo
subtituloFinDeSemanaDisponible.style.marginRight = "10px";

let finDeSemanaDisponible = document.createElement("p");
finDeSemanaDisponible.textContent = medico.finDeSemanaDisponible;
finDeSemanaDisponible.style.margin = "0";
finDeSemanaDisponible.style.display = "inline";
finDeSemanaDisponible.style.color = "#222";  // Cambiar color del párrafo a #222

let contenedorFinDeSemanaDisponible = document.createElement("div");
contenedorFinDeSemanaDisponible.style.display = "flex";
contenedorFinDeSemanaDisponible.style.alignItems = "center";
contenedorFinDeSemanaDisponible.style.marginBottom = "10px";

contenedorFinDeSemanaDisponible.appendChild(subtituloFinDeSemanaDisponible);
contenedorFinDeSemanaDisponible.appendChild(finDeSemanaDisponible);

// PASO FINAL (ORDENANDO LAS CARTAS)
tarjeta.appendChild(contenedorNombres);
tarjeta.appendChild(contenedorMatriculaProfesional);
tarjeta.appendChild(contenedorEspecialidad);
tarjeta.appendChild(contenedorSalario);
tarjeta.appendChild(contenedorIps);
tarjeta.appendChild(contenedorCorreo);
tarjeta.appendChild(contenedorTelefono);
tarjeta.appendChild(contenedorDireccionConsultorio);
tarjeta.appendChild(contenedorFinDeSemanaDisponible);

// Añadir tarjeta a la columna y luego a la fila
columna.appendChild(tarjeta);
fila.appendChild(columna);


});
});




import {buscarPacientes} from "../services/servicioPaciente.js"

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
let nombre = document.createElement("h2"); 

nombre.textContent = paciente.nombre;


//PASO FINAL (ORDENANDO LAS CARTAS)
    tarjeta.appendChild(nombre);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);

  });

})


  
  



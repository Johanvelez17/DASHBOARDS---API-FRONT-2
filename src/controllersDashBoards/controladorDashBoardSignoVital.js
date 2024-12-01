import {buscarSignosVitales} from "../services/servicioSignoVital.js"

//OBJETIVO:Recibir datos del BACK y hacerles render (render = PINTARLOS)
//1. LLAMAR AL API

buscarSignosVitales()
.then(function(respuestaBack){
  console.log(respuestaBack)

    //2. CREAR UNA REFERENCIA A UNA ETIQUETA HTML DONDE VAMOS A RENDERIZAR
    let fila=document.getElementById("fila");

    //3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
    respuestaBack.forEach(function(signoVital){
    console.log(signoVital);

    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=signoVital.nombre

    let valor=document.createElement("p");
    valor.textContent=signoVital.valor
    
    let fechamedida=document.createElement("p");
    fechamedida.textContent=signoVital.fechamedida

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(valor);
    tarjeta.appendChild(fechamedida);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
    
    })
});
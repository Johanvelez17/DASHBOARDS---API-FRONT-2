let signosVitales=[
    {
        nombre:"Presion arterial",
        valor:"120/70",
        fechamedida:"2000-07-12"
    },
    {
        nombre: "Frecuencia cardíaca",
        valor: "75 bpm",
        fechamedida: "2023-10-30"
    },
    {
        nombre: "Temperatura corporal",
        valor: "37.0 °C",
        fechamedida: "2023-10-29"
    },
    {
        nombre: "Frecuencia respiratoria",
        valor: "16 respiraciones/min",
        fechamedida: "2023-10-28"
    },
    {
        nombre: "Oxígeno en sangre",
        valor: "98%",
        fechamedida: "2023-10-27"
    },
    {
        nombre: "Glicemia",
        valor: "90 mg/dL",
        fechamedida: "2023-10-30"
    }
];

let fila=document.getElementById("fila");

signosVitales.forEach(function(signoVital){
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
    

});
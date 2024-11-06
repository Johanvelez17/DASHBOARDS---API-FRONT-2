//CONTROLADOR DE DASHBOARDS

//OBJETIVO:Recibir datos del BACK y hacerles render (render = PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS

let pacientes = [
    {
      id: 854,
      nombre: "Vladimir Stiven Vélez",
      anioNacimiento:"2004-05-17",
      ciudad:"Medellin",
      correo: "Stiven563@gmail.com",
      telefono: 3018296734,
      ips: "San Ignacio",
      grupoIngresos:"C",
      poliza:true,
      fechaAfiliación:"2019-02-12"
    },
    {
      id: 855,
      nombre: "Laura Isabel Pérez",
      anioNacimiento: "2002-11-08",
      ciudad: "Bogotá",
      correo: "laura.isabel.perez92@gmail.com",
      telefono: 3208462934,
      ips: "Colsubsidio",
      grupoIngresos: "B",
      poliza: true,
      fechaAfiliación: "2020-06-15"
  },
  {
      id: 856,
      nombre: "Carlos Eduardo Mejía",
      anioNacimiento: "2001-07-22",
      ciudad: "Cali",
      correo: "carlos_mejia99@gmail.com",
      telefono: 3125479821,
      ips: "Sura",
      grupoIngresos: "A",
      poliza: false,
      fechaAfiliación: "2018-04-10"
  },
  {
      id: 857,
      nombre: "Ana María Torres",
      anioNacimiento: "2003-03-30",
      ciudad: "Cartagena",
      correo: "ana.maria.torres@mail.com",
      telefono: 3047628935,
      ips: "Compensar",
      grupoIngresos: "C",
      poliza: true,
      fechaAfiliación: "2021-08-20"
  }
  ]
  
  
  //2. CREAR UNA REFERENCIA A UNA ETIQUETA HTML DONDE VAMOS A RENDERIZAR
  let fila  = document.getElementById("fila");
  
  
  //3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
  pacientes.forEach(function(paciente){
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




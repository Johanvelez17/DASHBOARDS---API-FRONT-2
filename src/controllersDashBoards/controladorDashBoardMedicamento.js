//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 
let medicamentos=[
    {
        id: 1,
        nombre:"Acetaminofen",
        presentacion:"tableta",
        dosis:"2 pastillas",
        laboratorio:"Sur itagui",
        fechaCaducidad:"2040-07-30",
        contraIndicaciones:"No exceder",
        registroInvima:"201232",
        copago:true
    },
    {
        id:2,
        nombre: "Ibuprofeno",
        presentacion: "tableta",
        dosis: "1 tableta",
        laboratorio: "Laboratorios Pérez",
        fechaCaducidad: "2026-03-15",
        contraIndicaciones: "No usar en pacientes con úlceras gástricas",
        registroInvima: "201347",
        copago: true
    },
    {
        id: 3,
        nombre: "Amoxicilina",
        presentacion: "cápsulas",
        dosis: "1 cápsula cada 8 horas",
        laboratorio: "Laboratorios Abbott",
        fechaCaducidad: "2025-05-12",
        contraIndicaciones: "Hipersensibilidad a penicilinas",
        registroInvima: "202114",
        copago: true
    },
    {
        id: 4,
        nombre: "Loratadina",
        presentacion: "tableta",
        dosis: "1 tableta diaria",
        laboratorio: "Lab Farma S.A.",
        fechaCaducidad: "2027-09-30",
        contraIndicaciones: "No usar en embarazo sin indicación médica",
        registroInvima: "203110",
        copago: false
    },
    {
        id: 5,
        nombre: "Omeprazol",
        presentacion: "cápsulas",
        dosis: "1 cápsula diaria antes de las comidas",
        laboratorio: "Sandoz",
        fechaCaducidad: "2029-02-28",
        contraIndicaciones: "No usar con medicamentos que interactúan con el CYP2C19",
        registroInvima: "204322",
        copago: true
    },
    {
        id: 6,
        nombre: "Paracetamol",
        presentacion: "jarabe",
        dosis: "10 ml",
        laboratorio: "Farmacéutica del Valle",
        fechaCaducidad: "2028-11-20",
        contraIndicaciones: "Evitar en caso de enfermedad hepática",
        registroInvima: "202025",
        copago: false
    }
];
;
//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
medicamentos.forEach(function(medicamento){
    console.log(medicamento);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=medicamento.nombre

    let presentacion=document.createElement("p");
    presentacion.textContent=medicamento.presentacion

    let dosis=document.createElement("p");
    dosis.textContent=medicamento.dosis

    let laboratorio=document.createElement("p");
    laboratorio.textContent=medicamento.laboratorio

    let fechaCaducidad=document.createElement("p");
    fechaCaducidad.textContent=medicamento.fechaCaducidad

    let contraIndicaciones=document.createElement("p");
    contraIndicaciones.textContent=medicamento.contraIndicaciones

    let registroInvima=document.createElement("p");
    registroInvima.textContent=medicamento.registroInvima
    
    let copago=document.createElement("p");
    copago.textContent=medicamento.copago

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(presentacion);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(laboratorio);
    tarjeta.appendChild(fechaCaducidad);
    tarjeta.appendChild(contraIndicaciones);
    tarjeta.appendChild(registroInvima);
    tarjeta.appendChild(copago);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
});
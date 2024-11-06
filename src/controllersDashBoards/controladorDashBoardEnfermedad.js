//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 
let enfermedadades = [
    {
        id: 23,
        nombre: "Neumonía Viral",
        sintomas: ["fiebre alta", "dificultad para respirar", "tos persistente", "dolor en el pecho", "fatiga extrema", "escalofríos", "sudoración nocturna"],
        clasificacion: "grave",
        grado: "4",
        probabilidadVida: "Moderada",
    },
    {
        id: 22,
        nombre: "Resfriado Común",
        sintomas: "congestión nasal, dolor de garganta, estornudos, moco claro, leve tos, fatiga leve",
        clasificacion: "leve",
        grado: "1",
        probabilidadVida: "Alta"
    },
    {
        id: 21,
        nombre: "Gripe",
        sintomas: "tos, fiebre alta, dolores musculares, fatiga, dolor de cabeza, congestión nasal, dolor de garganta",
        clasificacion: "grave",
        grado: "3",
        probabilidadVida: "Baja",
    },
    {
        id: 24,
        nombre: "Coronavirus (COVID-19)",
        sintomas: "fiebre, tos, dificultad respiratoria, pérdida de olfato",
        clasificacion: "grave",
        grado: "3",
        probabilidadVida: "Media"
    },
    {
        id: 25,
        nombre: "Gripe aviar",
        sintomas: "tos, fiebre, dolores musculares, dificultad respiratoria",
        clasificacion: "grave",
        grado: "2",
        probabilidadVida: "Alta"
    },
    {
        id: 26,
        nombre: "Bronquitis",
        sintomas: "tos persistente, fiebre, dolor en el pecho",
        clasificacion: "moderada",
        grado: "2",
        probabilidadVida: "Baja"
    }
];
//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
enfermedadades.forEach(function(enfermedad){
    console.log(enfermedad);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=enfermedad.nombre

    let sintomas=document.createElement("p");
    sintomas.textContent=enfermedad.sintomas

    let clasificacion=document.createElement("p");
    clasificacion.textContent=enfermedad.clasificacion

    let grado=document.createElement("p");
    grado.textContent=enfermedad.grado
    
    let probabilidadVida=document.createElement("p");
    probabilidadVida.textContent=enfermedad.probabilidadVida

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(sintomas);
    tarjeta.appendChild(clasificacion);
    tarjeta.appendChild(grado);
    tarjeta.appendChild(probabilidadVida);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
});
//PASOS PARA CONSUMIR API CON JS

export async function buscarMedicos() {
    
    //1. se configura la url del servicio
    //que se desea consumir (Para donde nos redireccionamos)

    const url = "http://localhost:8080/api/medico"

    //2. Se configura la petición del servicio a consumir
    //(Que vamos a hacer en esa dirección)

    let peticion = {
        method: "GET"
    }

    //3. consumir el API (Ralizar accion)4
    let respuestaServidor = await fetch(url, peticion)
    let medicos = await respuestaServidor.json()
    return medicos
}


export async function registrarMedico(datosMedico){
    const url = "http://localhost:8080/api/medico"
    let peticion = {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(datosMedico)
    }
    let respuestaInicial = await fetch(url, peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal;
    
}



//PASOS PARA CONSUMIR API CON JS

export async function buscarMedicamentos() {
    
    //1. se configura la url del servicio
    //que se desea consumir (Para donde nos redireccionamos)

    const url = "http://localhost:8080/api/medicamentos"

    //2. Se configura la petición del servicio a consumir
    //(Que vamos a hacer en esa dirección)

    let peticion = {
        method: "GET"
    }

    //3. consumir el API (Ralizar accion)
    let respuestaServidor = await fetch(url, peticion)
    let medicamentos = await respuestaServidor.json()
    return medicamentos;

}

export async function registrarMedicamento(datosMedicamento){
    const url = "http://localhost:8080/api/medicamentos"
    let peticion = {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(datosMedicamento)
    }
    let respuestaInicial = await fetch(url, peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal;
    
}


//PASOS PARA CONSUMIR API CON JS

export async function buscarSignosVitales() {
    
    //1. se configura la url del servicio
    //que se desea consumir (Para donde nos redireccionamos)

    const url = "http://localhost:8080/api/signovital"

    //2. Se configura la petición del servicio a consumir
    //(Que vamos a hacer en esa dirección)

    let peticion = {
        method: "GET"
    }

    //3. consumir el API (Ralizar accion)
    let respuestaServidor = await fetch(url, peticion)
    let signoVital = await respuestaServidor.json()
    return signoVital;

}

export async function registrarSignosVitales(datosSignoVital){
    const url = "http://localhost:8080/api/signovital"
    let peticion = {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(datosSignoVital)
    }
    let respuestaInicial = await fetch(url, peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal;
    
}

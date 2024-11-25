//PASOS PARA CONSUMIR API CON JS

export async function buscarEnfermedades() {
    
    //1. se configura la url del servicio
    //que se desea consumir (Para donde nos redireccionamos)

    const url = "https://localhost:8080/api/enfermedad"

    //2. Se configura la petición del servicio a consumir
    //(Que vamos a hacer en esa dirección)

    let peticion = {
        method: "GET"
    }

    //3. consumir el API (Ralizar accion)4
    let respuestaServidor = await fetch(url, peticion)
    let enfermedad = await respuestaServidor.json()
    return enfermedad

}
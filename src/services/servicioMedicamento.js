//PASOS PARA CONSUMIR API CON JS

export async function buscarMedicamento() {
    
    //1. se configura la url del servicio
    //que se desea consumir (Para donde nos redireccionamos)

    const url = "https://localhost:8080/api/medicamentos"

    //2. Se configura la petición del servicio a consumir
    //(Que vamos a hacer en esa dirección)

    let peticion = {
        method: "GET"
    }

    //3. consumir el API (Ralizar accion)4
    let respuestaServidor = await fetch(url, peticion)
    let medicamentos = await respuestaServidor.json()
    return medicamentos

}
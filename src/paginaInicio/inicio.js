let contadorClics = 0;
let prueba =  document.querySelector(".prueba img");
let cuerpo = document.querySelector(".cuerpo")


prueba.addEventListener("click", ()=>{
    // alert("¿Por qué tocas la imagen?");
    contadorClics++;

    let mensaje = "";
    switch (contadorClics) {
        case 1: alert("¿Por qué das click? No me molestes!")
        break;
        
        case 2: alert("¡Dejame en paz! Te lo advierto")
        break;

        case 3: alert("Te lo dije, no me toques!!! 😡")
        break;

        case 4: alert("pondré tu contenido oscuro!! 😡😡😡 ")
            cuerpo.style.position = "relative";
            cuerpo.style.zIndex = 10;
            cuerpo.style.background = "#000";
            cuerpo.style.width = "100%";
            cuerpo.style.height = "15000px";
            cuerpo.style.top = "-2000px"
        break;

        default: alert("De acuerdo volvamos a la normalidad")
        cuerpo.style.position = "none";
        cuerpo.style.zIndex = 0;
        cuerpo.style.background = "transparent";
        cuerpo.style.width = "0";
        cuerpo.style.height = "0";
        cuerpo.style.top = "0"
        break;
    }
    
});

// .cuerpo{
//     background-color: #000;
//     width:100%;
//     height:2000px;
//     position: relative;
//     z-index: 2;
//     top:-2000px;
// }
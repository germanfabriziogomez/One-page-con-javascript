

// boton de cambio de modo

let toggleBtn = document.getElementById("toggleButton");

toggleBtn.addEventListener("click", ()=> {


    let bdy= document.body;

    cambiarAModoOscuro(bdy,"modo-oscuro")
   
    let seccion_contacto = document.querySelector(".seccion-contacto")
    
    cambiarAModoOscuro(seccion_contacto,"modo-oscuro")
   
    if(bdy.classList.contains("modo-oscuro"))
    {
        toggleBtn.textContent="Modo claro"
    }
    else 
    {
        toggleBtn.textContent="Modo oscuro"
    }
})


function cambiarAModoOscuro(elemento,nombre_clase){  // delego en otra funcion para no repetir codigo
    
    elemento.classList.toggle(nombre_clase);
    
}

// accion al hacer scroll

document.addEventListener("DOMContentLoaded", ()=> {
    let secciones = document.querySelectorAll(".section")
    
    // agrego evento de tipo scroll
    window.addEventListener("scroll",()=>{
        
        secciones.forEach((seccion) => {
            
            let posicion = seccion.getBoundingClientRect()  // obtengo la posicion de la seccion
            
            if(posicion.top< 0.85*window.innerHeight && posicion.bottom >=0) { // si el top de la seccion esta mas arriba que el 85% del total del viewport, entonces lo muestro
                // agrego la clase visible
                seccion.classList.add("section-visible")
            }
            else{
                seccion.classList.remove("section-visible") // si ya fueron mostradas antes pero me fui desplazando hacia otras secciones, entonces las vuelvo a ocultar
            }
            
        })
    })
})

// boton de read more

let btnReadMore = document.querySelector(".btn-read-more");

btnReadMore.addEventListener("click",()=> {

    let txtOculto = document.querySelector(".text-read-more") // agarro al texto
    txtOculto.style.display="block";    // muestro el texto

    btnReadMore.style.display="none";   // oculto el boton de "leer mas"
})










const boton = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const inicio = document.querySelector('.ingreso a');

function Video() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('iframe');
    trailer.classList.toggle('active');
    video.pause();
}

function cerrarInicio() {
    const cerrar = document.querySelector('.loader-cierre');
    cerrar.classList.toggle('active');
    setTimeout(function(){ 
      window.location.href = "/disney";
}, 500);
}

inicio.addEventListener("click",cerrarInicio);
boton.addEventListener("click",Video);
cerrar.addEventListener("click",Video);

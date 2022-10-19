const inicio = document.querySelectorAll('.link-inicio');
const sesion = document.querySelector('.link-sesion');
const sus = document.querySelector('.link-sus');

for (let i = 0; i < inicio.length; i++) {
  inicio[i].addEventListener("click", function() {
    const cerrar = document.querySelector('.loader-cierre');
    cerrar.classList.toggle('active');
    setTimeout(function(){ 
      window.location.href = "/";
}, 500);
  });
}

sesion.addEventListener("click", function() {
  const cerrar = document.querySelector('.loader-cierre');
  cerrar.classList.toggle('active');
  setTimeout(function(){ 
    window.location.href = "/Login";
}, 500);
});

const boton1 = document.querySelector('#boton1');

boton1.addEventListener("click", function() {
  const mail = document.querySelector('#mail').value
  const respuesta = document.querySelector('#respuesta');
  respuesta.textContent = mail;
});




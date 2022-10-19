const inicio = document.querySelectorAll('.link-inicio');
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

sus.addEventListener("click", function() {
    const cerrar = document.querySelector('.loader-cierre');
    cerrar.classList.toggle('active');
    setTimeout(function(){ 
      window.location.href = "/Register";
  }, 500);
  });
const sus = document.querySelectorAll('.link-sus');
const sesion = document.querySelector('.link-sesion');

for (let i = 0; i < sus.length; i++) {
  sus[i].addEventListener("click", function() {
    const cerrar = document.querySelector('.loader-cierre');
    cerrar.classList.toggle('active');
    setTimeout(function(){ 
      window.location.href = "/register";
}, 500);
  });
}

sesion.addEventListener("click", function() {
  const cerrar = document.querySelector('.loader-cierre');
  cerrar.classList.toggle('active');
  setTimeout(function(){ 
    window.location.href = "/login";
}, 500);
});


window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("scroll", window.scrollY > 390);
});

document.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName == 'IMG') {
    evt.preventDefault();
  }
});

const acordion = document.getElementsByClassName('label');

for (i = 0; i < acordion.length; i++) {
  acordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}
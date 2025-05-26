$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false
  });
});

const inicio = new Date("2025-05-09T00:00:00");
const contador = document.getElementById("contador");

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - inicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  contador.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

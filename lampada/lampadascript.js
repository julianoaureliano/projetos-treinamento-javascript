const botaoLigar = document.getElementById("botaoLigar");
const botaoDesligar = document.getElementById("botaoDesligar");
const imagemLamp = document.getElementById("lamp");
const mensa = document.getElementById("mensagem");

function lampadaQuebrada() {
  return imagemLamp.src.indexOf("quebrada") > -1;
}
function lampadaLigada() {
  if (!lampadaQuebrada()) {
    imagemLamp.src = "./img/ligada.jpg";
  }
}
function lampadaDesligada() {
  if (!lampadaQuebrada()) {
    imagemLamp.src = "./img/desligada.jpg";
  }
}
botaoLigar.addEventListener("click", lampadaLigada);
botaoDesligar.addEventListener("click", lampadaDesligada);
imagemLamp.addEventListener("mouseover", lampadaLigada);
imagemLamp.addEventListener("mouseout", lampadaDesligada);

imagemLamp.addEventListener("dblclick", () => {
  if (!lampadaQuebrada()) {
    imagemLamp.src = "./img/quebrada.jpg";
    mensa.textContent = "Atualize a página, lâmpada quebrada.";
  }
});

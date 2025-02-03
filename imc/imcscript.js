const nomeDoUsuario = document.getElementById("nome");
const alturaDoUsuario = document.getElementById("altura");
const pesoDoUsuario = document.getElementById("peso");
const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", () => {
  if (
    nomeDoUsuario.value.trim() == "" ||
    alturaDoUsuario.value.trim() == "" ||
    pesoDoUsuario.value.trim() == ""
  ) {
    resultado.textContent = "Preencha todos os campos";
  } else {
    let imc =
      pesoDoUsuario.value / (alturaDoUsuario.value * alturaDoUsuario.value);
    resultado.textContent = nomeDoUsuario.value + " Seu imc é : " + imc;
  }
});

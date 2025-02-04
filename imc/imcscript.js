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
    let imc = (
      pesoDoUsuario.value /
      (alturaDoUsuario.value * alturaDoUsuario.value)
    ).toFixed(2);
    console.log(imc);

    if (imc >= 40) {
      resultado.textContent =
        nomeDoUsuario.value + " Seu imc é : " + imc + ". Obesidade grau 3!!";
    } else if (imc >= 35 && imc < 39.9) {
      resultado.textContent =
        nomeDoUsuario.value + " Seu imc é : " + imc + ". Obesidade grau 2!!";
    } else if (imc >= 30 && imc < 34.9) {
      resultado.textContent =
        nomeDoUsuario.value + " Seu imc é : " + imc + ". Obesidade grau 1!!";
    } else if (imc >= 25 && imc < 29.9) {
      resultado.textContent =
        nomeDoUsuario.value + " Seu imc é : " + imc + ". Sobrepeso!!";
    } else if (imc >= 18.6 && imc < 24.9) {
      resultado.textContent =
        nomeDoUsuario.value + " Seu imc é : " + imc + ". Normal!!";
    } else if (imc <= 18.5) {
      resultado.textContent =
        nomeDoUsuario.value + " Seu imc é : " + imc + ". Abaixo do normal!!";
    }
  }
});

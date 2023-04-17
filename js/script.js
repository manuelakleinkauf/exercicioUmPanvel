const btn = document.querySelector("#btn");
const resultado = document.querySelector("#resultado");

function criptografar(frase, rotacoes) {
  fraseCriptografada = "";

  for (let i = 0; i < frase.length; i++) {
    let ascii = frase[i].charCodeAt();
    let soma = ascii + rotacoes;

    if (soma >= 65 && soma <= 90) {
      fraseCriptografada += String.fromCharCode(soma);
    } else if (soma > 90) {
      fraseCriptografada += String.fromCharCode(65 + (soma % 91));
    } else {
      fraseCriptografada += frase[i];
    }
  }

  resultado.value = fraseCriptografada;
}

btn.addEventListener("click", function () {
  const frase = document.querySelector("#texto").value.toUpperCase();
  const rotacoes = parseInt(document.querySelector("#rotacoes").value);

  criptografar(frase, rotacoes);
});

const anoNascimento = document.querySelector("input#anoDeNascimento");
const masculino = document.querySelector("input#sexo-masculino");
const feminino = document.querySelector("input#sexo-feminino");
const verificar = document.querySelector("button#verificar");
const imagem = document.querySelector("img#imagem");
const texto = document.querySelector("p#textoDetectador");

function clicarNoBotao() {
  if (anoNascimento.value === "" || (!masculino.checked && !feminino.checked)) {
    alert("Por favor, preencha os dados acima.");
  } else {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - Number(anoNascimento.value);

    if (idade < 0 || idade > 100) {
      alert("Insira uma idade válida");
    } else {
      let identificacao = "";
      imagem.src = "";
      texto.innerHTML = "";

      if (masculino.checked) {
        if (idade <= 12) {
          identificacao = "Criança ou Bebê";
          texto.innerHTML = `${identificacao} Menino de ${idade} anos`;
          imagem.src = "imagens/masculino/crianca-masculino.jpg";
        } else if (idade >= 13 && idade <= 17) {
          identificacao = "Adolescente";
          texto.innerHTML = `${identificacao} Homem de ${idade} anos`;
          imagem.src = "imagens/masculino/adolescente-masculino.jpg";
        } else if (idade >= 18 && idade <= 59) {
          identificacao = "Adulto";
          texto.innerHTML = `${identificacao} Homem de ${idade} anos`;
          imagem.src = "imagens/masculino/adulto-masculino.jpg";
        } else if (idade >= 60) {
          identificacao = "Idoso";
          texto.innerHTML = `${identificacao} Homem de ${idade} anos`;
          imagem.src = "imagens/masculino/idoso-masculino.jpg";
        }
      } else if (feminino.checked) {
        if (idade <= 12) {
          identificacao = "Criança ou Bebê";
          texto.innerHTML = `${identificacao} Menina de ${idade} anos`;
          imagem.src = "imagens/feminina/crianca-feminina.jpg";
        } else if (idade >= 13 && idade <= 17) {
          identificacao = "Adolescente";
          texto.innerHTML = `${identificacao} Mulher de ${idade} anos`;
          imagem.src = "imagens/feminina/adolescente-feminina.jpg";
        } else if (idade >= 18 && idade <= 59) {
          identificacao = "Adulta";
          texto.innerHTML = `${identificacao} Mulher de ${idade} anos`;
          imagem.src = "imagens/feminina/adulta-feminina.jpg";
        } else if (idade >= 60) {
          identificacao = "Idosa";
          texto.innerHTML = `${identificacao} Mulher de ${idade} anos`;
          imagem.src = "imagens/feminina/idosa-feminina.jpg";
        }
      }
    }
  }
}

verificar.addEventListener("click", clicarNoBotao);

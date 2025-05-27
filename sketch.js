let filmes = [
  { nome: "A viagem de Chihiro", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "Paddington", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "As aventuras de Pi", idade: 10, categorias: ["drama", "fantasia", "aventura"] },
  { nome: "Guardiões da Galáxia", idade: 12, categorias: ["fantasia", "aventura"] },
  { nome: "Ladrões de Bicicleta", idade: 12, categorias: ["drama"] },
  { nome: "O menino que descobriu o vento", idade: 14, categorias: ["drama"] }
];
let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama;
let filmesRecomendados = [];
let campoIdade;
let campoFantasia;
let recomendacaoTexto = "Nenhum filme recomendado";

function setup() {
  createCanvas(800, 400);

  // 🔵 Texto para informar ao usuário
  createSpan("Sua idade: ");
  campoIdade = createInput("5");

  // 🔵 Checkbox com descrição clara
  campoFantasia = createCheckbox(" Gosta de fantasia?");
}

// Removi as linhas com prompt() pois a entrada agora é feita pelos elementos HTML.
// idadeUsuario = int(prompt("Qual sua idade?"));
// gostaFantasia = prompt("Você gosta de filmes de fantasia? (sim/não)").toLowerCase() === "sim";
// As variáveis gostaAventura e gostaDrama não estavam sendo usadas na função geraRecomendacao original.
// Se você pretende usá-las, precisará modificar a função geraRecomendacao.
// Por ora, manterei a função como estava na sua versão para corrigir os erros de escopo e exibição.

function geraRecomendacao(idade, gostaDeFantasia) {
  idade = parseInt(idade); // Garante que a idade seja um número inteiro

  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (gostaDeFantasia) {
        return "As aventuras de Pi";
      } else {
        // "Depois da chuva" não está na sua lista de filmes.
        // Se pretendia usar um filme da lista, substitua aqui.
        const filmeDrama12 = filmes.find(filme => filme.idade <= idade && filme.categorias.includes("drama"));
        return filmeDrama12 ? filmeDrama12.nome : "Nenhum filme recomendado";
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de Chihiro";
    } else {
      // "O feitiço do tempo" não está na sua lista de filmes.
      // Se pretendia usar um filme da lista, substitua aqui.
      const filmeAventura0 = filmes.find(filme => filme.idade <= idade && filme.categorias.includes("aventura"));
      return filmeAventura0 ? filmeAventura0.nome : "Paddington"; // Retorna Paddington se aventura e idade <= 0
    }
  }
}

function draw() {
  background("white"); // ⚪ Fundo branco
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  recomendacaoTexto = geraRecomendacao(idade, gostaDeFantasia);

  fill(color(76, 0, 115)); // 🟣 Cor do texto (roxo escuro)
  textAlign(CENTER, CENTER); // 🎯 Alinhamento centralizado
  textSize(38); // 🔠 Tamanho maior para boa leitura

  text(recomendacaoTexto, width / 2, height / 2); // 📍 Texto exibido no centro
}

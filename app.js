// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  let nomeAmigo = document.getElementById("amigo").value.trim();

  // Valida se o campo está vazio
  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adiciona o nome ao array de amigos
  amigos.push(nomeAmigo);

  // Limpa o campo de entrada
  document.getElementById("amigo").value = "";

  // Atualiza a lista de amigos no DOM
  atualizarListaAmigos();
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
  // Seleciona o elemento da lista
  let lista = document.getElementById("listaAmigos");

  // Limpa a lista existente para evitar duplicação
  lista.innerHTML = "";

  // Percorre o array de amigos e cria os elementos <li> para cada nome
  for (let amigo of amigos) {
    let itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    lista.appendChild(itemLista);
  }
}
// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  // Valida se há amigos disponíveis no array
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
    return;
  }

  // Gera um índice aleatório usando Math.random() e Math.floor()
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtém o nome sorteado
  let nomeSorteado = amigos[indiceAleatorio];

  // Atualiza o resultado no HTML
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}
 // Função para reiniciar a lista de amigos e o resultado
function reiniciar() {
  amigos = [];
  atualizarListaAmigos();
  document.getElementById("resultado").innerHTML = "";
}


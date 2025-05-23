document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastro-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!validarEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    var notas = []

function salvarNota() {

  /**
   * AQUI DEVE SER A LÓGICA
   * 1. Capturar o valor digitado no textarea
   * 2. Verificar se o valor não está vazio
   * 3. Adicionar ao array notas[]
   * 4. Limpar o campo
   */

  carregarNotas();
}

/** NÃO MEXA NA FUNÇÃO CARREGAR NOTAS */
function carregarNotas() {
  const lista = document.getElementById('listaNotas');
  lista.innerHTML = "";

  notas.forEach((nota, index) => {
    const li = document.createElement('li');
    li.textContent = nota;
    lista.appendChild(li);
  });
}
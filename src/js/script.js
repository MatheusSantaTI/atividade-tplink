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

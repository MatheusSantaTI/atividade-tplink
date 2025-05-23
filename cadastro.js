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

    const usuario = { nome, email, senha };

    try {
      // Simula envio ou substitua com fetch() para backend real
      console.log('Enviando dados de cadastro:', usuario);

      // Exemplo de fetch:
      // const response = await fetch('/api/cadastrar', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(usuario)
      // });

      // const resultado = await response.json();
      // alert('Cadastro realizado com sucesso!');

      alert('Cadastro simulado com sucesso!');
      form.reset();
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao realizar cadastro. Tente novamente mais tarde.');
    }
  });

  function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});

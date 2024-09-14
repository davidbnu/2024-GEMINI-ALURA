const form = document.getElementById('cadastroForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    console.log(`${input.name}: ${input.value}`);
  });
});
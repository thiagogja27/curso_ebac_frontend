const form = document.querySelector('form');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const successMessage = document.querySelector('.success-message');



form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (parseInt(campoB.value) > parseInt(campoA.value)) {
    successMessage.innerHTML = 'Formulário válido! Número B é maior que o número A.';
    successMessage.style.color = 'green' ;
  
    
} else {
    successMessage.textContent = 'Formulário inválido! Número B deve ser maior que o número A.';
    successMessage.style.color = 'red';

  }
});





  


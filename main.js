
function exibirSaudacao() {

    var saudacaoDiv = document.getElementById('saudacao');

    var mensagem = 'Olá, mundo!';

    saudacaoDiv.innerHTML = mensagem;
}


var botaoSaudacao = document.getElementById('botaoSaudacao');

botaoSaudacao.addEventListener('click', exibirSaudacao);
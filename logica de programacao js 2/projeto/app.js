let numeroSecreto = gerarNumeroAleatorio(); //criou uma var e essa var chama a function gerarNumeroAleatorio(); o valor do retorno vai para a var

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); //foi criada uma var chamada 'campo' e ela deve pegar no documento (utilizando o 'document') para selecionar os parametros de tag, usando o .querySelector
    campo.innerHTML = texto; //aqui foi chamada a var 'campo' e o innerHTML buscou dentro do HTML
}

exibirTextoNaTela('h1', 'Jogo do número secreto'); // a function exibirTextoNaTela recebe o parametro de tag 'h1' e esse recebe o sua string
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); // a function exibirTextoNaTela recebe o parametro de tag 'p' e esse recebe o sua string


 function verificarChute() { //criou uma funcao para verificar o chute da pessoa; funcoes determina acao e melhor ter apenas 1 responsabilidade
    let chute = document.querySelector('input')4.value; //criou a var 'chute' e ela buscou no documento html com o querySelector o VALOR do INPUT E GUARDOU na VAR
    console.log(chute == numeroSecreto);
 } 

function gerarNumeroAleatorio() { // function gerarNumeroAleatorio() da um retorno de um numero inteiro que vai de 0 a 10 de maneira aleatoria
  return parseInt(Math.random() * 10 + 1);
}
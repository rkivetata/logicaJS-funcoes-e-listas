let numeroSecreto = gerarNumeroAleatorio(); //criou uma var e essa var chama a function gerarNumeroAleatorio(); o valor do retorno vai para a var
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); //foi criada uma var chamada 'campo' e ela deve pegar no documento (utilizando o 'document') para selecionar os parametros de tag, usando o .querySelector
    campo.innerHTML = texto; //aqui foi chamada a var 'campo' e o innerHTML buscou dentro do HTML
}
function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto'); // a function exibirTextoNaTela recebe o parametro de tag 'h1' e esse recebe o sua string
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); // a function exibirTextoNaTela recebe o parametro de tag 'p' e esse recebe o sua string
}

exibirMensagemInicial();

 function verificarChute() { //criou uma funcao para verificar o chute da pessoa; funcoes determina acao e melhor ter apenas 1 responsabilidade
    let chute = document.querySelector('input').value; //criou a var 'chute' e ela buscou no documento html com o querySelector o VALOR do INPUT E GUARDOU na VAR

    if (chute == numeroSecreto) { 
      exibirTextoNaTela ('h1','Acertou!');
      let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemDeQntdTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
      exibirTextoNaTela('p', mensagemDeQntdTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela ('h1', `O número é menor que ${chute}.`);
    }
    else {
      exibirTextoNaTela ('h1', `O número é maior que ${chute}.`);
    }
    tentativas++;
    limparCampo();
 } 
 }

 function gerarNumeroAleatorio() { // function gerarNumeroAleatorio() da um retorno de um numero inteiro que vai de 0 a 10 de maneira aleatoria
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector('input'); //vai pegar o input do chute
  chute.value = ''; //pega o valor de chute e transforma em uma string vazia
}


function reiniciarJogo() { //refazer o jogo
  numeroSecreto = gerarNumeroAleatorio;
  limparCampo();
  tentativas= 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true); //pegou no documento HTML por ID a function 'reiniciar'; vai setar o atributo 'disable' do botao 'REINICIAR JOGO' como verdadeiro - ENTAO: o botao vai estar desativado
}

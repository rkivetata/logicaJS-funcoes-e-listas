let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); //criou uma var e essa var chama a function gerarNumeroAleatorio(); o valor do retorno vai para a var
let tentativas = 1;

function gerarNumeroAleatorio() { // function gerarNumeroAleatorio() da um retorno de um numero inteiro que vai de 0 a 10 de maneira aleatoria
  let numeroEscolhido = parseInt(Math.random() * numeroLimite  + 1); //guardou o numero aleatorio em uma var
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; //a var recebe o tamanho da lista de numeros sorteados

  if (quantidadeDeElementosNaLista== numeroLimite) { //se a var quantidade de elementos na lista for maior que o numero limite (10)
    listaDeNumerosSorteados = []; //a lista de numeros sorteados fica vazia
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) { //se a lista de numeros sorteados inclui o numero escolhido
    return gerarNumeroAleatorio(); //vai retornar a acao de gerar um numero aleatorio caso o numero escolhido ja esteja na lista de numeros sorteados
  } else { //senao 
    listaDeNumerosSorteados.push(numeroEscolhido); //adiciona na lista de numeros sorteadis o numero escolhido
    return numeroEscolhido; //retorna o numero escolhido
  }
}

function limparCampo()  {
  chute = document.querySelector('input'); //busca no documento HTML, utiliando o querySelector o input do chute
  chute = ''; //o botao do chute agora fica vazio
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); //foi criada uma var chamada 'campo' e ela deve pegar no documento (utilizando o 'document') para selecionar os parametros de tag, usando o .querySelector
    campo.innerHTML = texto; //aqui foi chamada a var 'campo' e o innerHTML buscou dentro do HTML
}

function exibirMensagemInicial () {
   // a function exibirTextoNaTela recebe o parametro de tag 'h1' e esse recebe o sua string
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); // a function exibirTextoNaTela recebe o parametro de tag 'p' e esse recebe o sua string

}

exibirMensagemInicial(); //chamou a function para exibir os textos na tela

 function verificarChute() { //criou uma funcao para verificar o chute da pessoa; funcoes determina acao e melhor ter apenas 1 responsabilidade
    let chute = document.querySelector('input').value; //criou a var 'chute' e ela buscou no documento html com o querySelector o VALOR do INPUT E GUARDOU na VAR
    
    if (chute = numeroSecreto) { //se o chute for igual o numero secreto
      exibirTextoNaTela('h1', 'Acertou!'); 
      let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
      exibirTextoNaTela ('p', 'mensagemTentativas');
      document.getElementById('reiniciar').removeAttribute('disabled'); //remove o atributo disbled do botão reiniciar
    } else { //senao 
      if (chute > numeroSecreto) { //se chute for maior que numero secreto
        exibirTextoNaTela('p', 'O Número secreto é menor que chute');
    } else { //se chute for menos que numero secreto
      exibirMensagemInicial('p', 'O Número secreto é maior que chute');
    }
    tentativas++;//no final cada tentativa incrementa mais 1
    limparCampo();//chama a function e limpa o campo
 } 
}

function reiniciarJogo () { //function para reiniciar o jogo
  numeroSecreto = gerarNumeroAleatorio; //vai gerar novamente o numero aleatorio
  limparCampo(); //limpa a area novamente
  tentativas = 1; //tentativas começa com 1
  exibirMensagemInicial; //exibe a mensagem inicial
  document.getElementById('reiniciar').setAttribute('disabled', true); //desativa o botao reiniciar
}




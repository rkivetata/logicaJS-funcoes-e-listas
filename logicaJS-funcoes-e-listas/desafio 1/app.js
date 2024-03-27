//desafios da primeira unidade do curso

//1- alterar o conteudo da tag 'h1' com o document.querySelector e atribuir o texto 'Hora do Desafio'
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

//2- criar uma function que exiba no console a mensagem 'o botão foi clicado!' 
function botaoMensagem() {
    console.log(`O botao foi clicado!`);
}

//3-criar uma function que exiba um alerta com a mensagem 'Eu amo JS' sempre que o botao alerta for pressionado
function botaoAlerta() {
    alert('Eu amo JS');
}

//4- criar uma function que executa quando o botao prompt é usado, perguntando o nome da cidade e exibindo um alerta 'Estive na ${cidade} e lembrei de você'
function botaoPrompt() {
    let cidade = prompt('Escreva o nome da sua cidade favorita');
    alert(`Estive em ${cidade} e lembrei de vc!`);
}

//5- ao clicar no botao soma ele pede 2 numeros e e exibe o resultado da soma em alerta
function botaoSoma() {
    let valor1 = parseInt(prompt(`Digite um numero`));
    let valor2 = parseInt(prompt(`Digite o segundo numero`));
    let soma = valor1 + valor2;
    alert(`O resultado é igual a ${soma}`);
}
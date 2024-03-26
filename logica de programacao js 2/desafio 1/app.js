let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoMensagem() {
    console.log(`O botao foi clicado!`);
}

function botaoAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt('Escreva o nome da sua cidade favorita');
    alert(`Estive em ${cidade} e lembrei de vc!`);
}

function botaoSoma() {
    let valor1 = parseInt(prompt(`Digite um numero`));
    let valor2 = parseInt(prompt(`Digite o segundo numero`));
    let soma = valor1 + valor2;
    alert(`O resultado é igual a ${soma}`);
}
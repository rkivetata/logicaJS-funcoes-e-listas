
//1- criar uma function que eibe ol mundo no console

function exibirConsole() {
    console.log('Ola, mundo!');
}

//2- cria uma function que recebe um nome como parametro e exibe 'olá, ${nome}

function exibirNomeConsole(nome) { //criou uma function que recebeu o parametro 'nome'
    console.log(`Ola, ${nome}`); //o console vai imprimir a var nome
}
exibirNomeConsole("Alice"); //a function receber "alice" na var que esta no parametro

//3- funtion que recebe um numero e retorna o dobro deles

function exibirNumeroConsole (numero) { //a function recebeu uma var em seu parametro
    return numero * 2; //aqui é onde a function retornara o valor  da var 'numero' em dobro
}
let resultadoDobro = exibirNumeroConsole(7); //var recebeu a function e essa recebeu o seu valor
console.log(resultadoDobro); //o console vai mostrar a tag resultadoDobro


//4- funtion que recebe 3 numeros como parametro e retorna a media deles
function mediaNumeros(valor1, valor2, valor3) { //function criada com tres vars como parametro
    return (valor1 + valor2 + valor3) / 3; //aqui a function vai retornar o valor da media (soma dos 3 divididos pela sua quantidade)
}

let media = mediaNumeros(7,17,20); //var criada que recebe a function como atributo e seus parametros recebem seus devidos valores
console.log(media);//o console chama a tag media


//5 - functon que recebe dois numeros como parametro e retorna o maior deles
function maiorNumero(numero1, numero2) { // function que recebe duas vars como parametro
    return numero1 > numero2 ? numero1 : numero2; //retorna 'se o numero1 for maior, retorna numero1 senao (:) retorna numero2
}

let encontrarNumero = maiorNumero (7, 15); //a var atribuiu a function seus devidos valores
console.log(encontrarNumero);

//6- Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function numeroMultiplicação(numeroInicial) {
    return(numeroInicial * numeroInicial);
}
let resultado = numeroMultiplicação(4)
console.log(resultadoQuadrao)
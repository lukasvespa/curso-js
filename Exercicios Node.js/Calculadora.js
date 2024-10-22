const rl = require("readline-sync")

/**
 * Criem uma calculadora que irá calcular Soma, Subtração, Multiplicação e Divisão.
 * Solicitem o Primeiro número, depois a Operação e por último o Segundo número.
 * Criem uma função para cada uma das Operações Matemáticas.
 * Utilizem o if/else para saber qual operação vai chamar qual função.
 * +  -  *  /
* DESAFIO:
 * Inserir a operação como menu, quando selecionada a opção S - SAIR, irá encerrar o código.
 * Caso contrário, enquanto selecionar uma operação (+ - * / ), solicitar os 2 números e exibir o resultado.
 */

const PrimeiroNumero = rl.questionInt("Digite um numero: ")
const Operador = rl.question("Informe a Operacao (+ - * /) ")
const SegundoNumero = rl.questionInt("Digite outro Numero: ")

function soma(PrimeiroNumero, SegundoNumero) {
    return PrimeiroNumero + SegundoNumero;
}

function sub(PrimeiroNumero, SegundoNumero) {
    return PrimeiroNumero - SegundoNumero;
}

function multi(PrimeiroNumero, SegundoNumero) {
    return PrimeiroNumero * SegundoNumero;
}

function divisao(PrimeiroNumero, SegundoNumero) {
    return PrimeiroNumero / SegundoNumero;
}

if (Operador == "+") {
    resultado = soma(PrimeiroNumero, SegundoNumero);
} else if (Operador == "-") {
    resultado = sub(PrimeiroNumero, SegundoNumero);
} else if (Operador == "*") {
    resultado = multi(PrimeiroNumero, SegundoNumero);
} else if (Operador == "/") {
    resultado = divisao(PrimeiroNumero, SegundoNumero);
} else {
    console.log("Operador Invalido")
}

console.log(`${PrimeiroNumero} ${Operador} ${SegundoNumero} = ${resultado}`);
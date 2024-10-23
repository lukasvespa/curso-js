// npm install readline-sync
const readline = require("readline-sync");

// Função Padrão - Função Nominal
function nomeDaFuncao() {
    console.log("isso é parte da minha função.");
    console.log("isso também é da função.");
}

function dizOla(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}. Eu sou uma função que sei dizer olá.`);
}

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

// Função Atribuída
const somatorio = function (numero1, numero2) {
    return numero1 + numero2;
}

// Função Anônima em Callback
function somaMaisUm(numero, fnAdicionarUm) {
    // console.log(typeof numero);
    // console.log(typeof fnAdicionarUm);
    return fnAdicionarUm(numero);
}

// Funções Flechas - Arrow Functions
const maisUm = n => n + 1;
const hello = frase => console.log(`Hello ${frase}`);

// Arrow Function com 2 parâmetros
const soma = (n1, n2) => n1 + n2;

// Arrow Function com múltiplas linhas
const contarUmaPiada = () => {
    console.log("Um pato chegou pro outro e disse QUACK.");
    console.log("O outro disse: Putz era isso que eu dizer.");
}

console.log('somatorio', somatorio(5, 9));
console.log('somaMaisUm', somaMaisUm(8, function(n) {
    return n + 1;
}));

console.log('maisUm', maisUm(7));
hello("World");
console.log('soma', soma(7, 8));
contarUmaPiada();
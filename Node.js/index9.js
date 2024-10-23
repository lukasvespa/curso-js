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

function somaMaisUm(numero, fnAdicionarUm) {
    console.log(typeof numero);
    console.log(typeof fnAdicionarUm);
    let resultado = fnAdicionarUm(numero);

    return resultado;
}




console.log('somatorio', somatorio(5, 9));
console.log('somaMaisUm', somaMaisUm(8, function(n) {
    return n + 1;
}));

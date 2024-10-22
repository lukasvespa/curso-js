// npm install readline-sync
const readline = require("readline-sync");

function nomeDaFuncao() {
    console.log("isso é parte da minha função.");
    console.log("isso também é da função.");
}

function dizOla(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}. Eu sou uma função que sei dizer olá.`);
}

nomeDaFuncao();
dizOla("Tafarel", "Chicotti");
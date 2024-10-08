// npm install readline-sync
const readline = require("readline-sync");

const nome = readline.question("Qual o seu nome? ");
const idade = readline.questionInt("Qual a sua idade? ");

console.log(`O nome informado foi: ${nome} e a idade informada foi de ${idade} anos.`);

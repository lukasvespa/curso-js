// Solicite Nome, 4 notas do ano e media final

const readline = require("readline-sync");

const nome = readline.question("Qual o nome do Aluno? ");
const nota1 = readline.questionFloat("Qual a nota do 1o Bimestre? ");
const nota2 = readline.questionFloat("Qual a nota do 2o Bimestre? ");
const nota3 = readline.questionFloat("Qual a nota do 3o Bimestre? ");
const nota4 = readline.questionFloat("Qual a nota do 4o Bimestre? ");
const notas = nota1 + nota2 + nota3 + nota4;
const mediafinal = notas / 4

console.log (`A média final das notas do ${nome} serão de ${mediafinal.toFixed(2)}`);
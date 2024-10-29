const rl = require("readline-sync")

//3 - Escreva um programa que receba 4 notas de um aluno e imprima a sua média final.

let soma = 0

for (i = 1; i <= 4; i++){
    let nota = rl.questionFloat(`Insira a ${i} nota do aluno: `)
    soma = soma + nota
}
media = soma / 4
console.log(`A media do aluno sera de ${media.toFixed(2)}`);
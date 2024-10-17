//SOLICITE 3 NÚMEROS PARA O USUÁRIO E INFORME SE O NÚMERO SOLICITADO É PAR OU ÍMPAR
const readline = require('readline-sync');

let soma = 0;

while(soma < 100) {
    let numero = readline.questionInt("Informe um numero para adicionar a soma: ");
    soma = soma + numero;
    console.log("soma: ", soma);
}

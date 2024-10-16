//SOLICITE 3 NÚMEROS PARA O USUÁRIO E INFORME SE O NÚMERO SOLICITADO É PAR OU ÍMPAR
const readline = require('readline-sync');

for(let i = 1; i <= 3; i++) {
    let numero = readline.questionInt("Informe um numero: ");

    if ( numero % 2 == 0) {
        console.log(`O numero ${numero} é par.`);
    } else {
        console.log(`O numero ${numero} é ímpar.`);
    }
}

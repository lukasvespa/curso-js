/**
 * npm install readline-sync 
 * 
 * 9 - Escreva um programa que tenha uma função chamada ehPrimo. Receba um número informado pelo usuário, passe ele para a função. Se o número for primo, deverá retornar true, senão false.
 */

const readline = require('readline-sync');

function ehPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
    }

    return true;
}

const num = readline.questionInt("Informe um numero: ");

if (ehPrimo(num)) {
    console.log(`O número ${num} é um número primo.`);
} else {
    console.log(`O número ${num} não é um número primo.`);
}

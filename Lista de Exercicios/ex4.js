/**
 * npm install readline-sync 
 *
 * 4 - Escreva uma função chamada DOBRO que recebe um número e devolve o seu dobro.
 */
const rl = require('readline-sync');

let numero = rl.questionInt("Insira o seu numero: ");

function dobro(numero) {
    return numero * 2;
}

let numeroDobrado = dobro(numero);

console.log(`O dobro de ${numero} é ${numeroDobrado}`);

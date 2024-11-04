/**
 * npm install readline-sync 
 * 
 * 6 - Escreva um programa que irá receber 2 valores e deverá informar qual é o maior e qual é o menor.
 */
const readline = require('readline-sync');

const numero1 = readline.questionInt("Informe um numero: ");
const numero2 = readline.questionInt("Informe outro numero: ");

if (numero1 > numero2) {
    console.log(`O ${numero1} é maior que ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`O ${numero2} é maior que ${numero1}`);
} else {
    console.log(`O ${numero2} é igual ao ${numero1}`);
}
/**
 * npm install readline-sync 
 * 
 * 7 - Escreva um programa que irá receber 4 números e deverá informar a soma de todos os números, o menor número e o maior número, além da média dos valores.
 * 
 * SOMA   - check
 * MEDIA  - check
 * MAIOR
 * MENOR
 */

const readline = require('readline-sync');

const n1 = readline.questionFloat("Informe o primeiro numero: ");
const n2 = readline.questionFloat("Informe o segundo numero: ");
const n3 = readline.questionFloat("Informe o terceiro numero: ");
const n4 = readline.questionFloat("Informe o quarto numero: ");

const soma = n1 + n2 + n3 + n4;
const media = soma / 4;

let maior = n1;
let menor = n1;

if (n2 > maior) {
    maior = n2;
}
if (n3 > maior) {
    maior = n3;
}
if (n4 > maior) {
    maior = n4;
}

if (n2 < menor) {
    menor = n2;
}
if (n3 < menor) {
    menor = n3;
}
if (n4 < menor) {
    menor = n4;
}

console.log(`A soma dos valores é: ${soma}`);
console.log(`A média dos valores é: ${media.toFixed(2)}`);
console.log(`O maior valor é: ${maior}`);
console.log(`O menor valor é: ${menor}`);
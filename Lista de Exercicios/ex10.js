/**
 * npm install readline-sync 
 * 
 * 10 - Escreva um programa que receba vários números pelo usuário, números positivos e negativos. Quando o usuário digitar 0 (zero), deverá parar de pedir números para o usuário e deverá retornar QUANTOS NUMEROS POSITIVOS FORAM INFORMADOS, QUANTOS NUMEROS NEGATIVOS FORAM INFORMADOS e QUANTOS NUMEROS FORAM INFORMADOS AO TODO.
 */
const readline = require('readline-sync');

let quantidadePositivo = 0;
let quantidadeNegativo = 0;

let numeroInformado;

while(numeroInformado != 0) {
    numeroInformado = readline.questionInt("Informe um numero: ");

    if (numeroInformado != 0) {
        if (numeroInformado > 0) {
            quantidadePositivo++;
        } else {
            quantidadeNegativo++;
        }
    }
}

console.log(`A quantidade de números informados foi ${quantidadeNegativo + quantidadePositivo}`);
console.log(`A quantidade de números positivos foi ${quantidadePositivo}`);
console.log(`A quantidade de números negativos foi ${quantidadeNegativo}`);

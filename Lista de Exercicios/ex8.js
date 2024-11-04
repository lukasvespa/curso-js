/**
 * npm install readline-sync 
 * 
 * 8 - Escreva um programa para calcular a soma dos números de 1 a 100.
 * Saída esperada: "A soma dos números de 1 à 100 é 5050."
 */
const readline = require('readline-sync');

const calcularSoma = () => {
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        soma += i; // soma = soma + i;
    }

    console.log(`A soma dos números de 1 a 100 é ${soma}`);
}

calcularSoma();
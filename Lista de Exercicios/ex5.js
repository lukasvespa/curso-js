const rl = require("readline-sync")

//5 - Escreva um programa que imprima os múltiplos de 3 e 5 simultaneamente entre 1 e 100.

let valor = 0

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}
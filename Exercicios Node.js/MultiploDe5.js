// Solicite um número para o usuário, enquanto esse número for múltiplo de 5, continue pedindo outro número. Informem que o número é múltiplo de 5.

const readline = require('readline-sync');

let valor = 0

while (valor % 5 == 0) {
    valor = readline.questionInt("Informe numero multiplo de 5: ");
    if (valor % 5 == 0) {
        console.log('Numero: ', valor);
        console.log('Multiplo de 5')
    } else {
        console.log('Numero: ', valor);
        console.log('Nao e Multiplo de 5')
    }
}
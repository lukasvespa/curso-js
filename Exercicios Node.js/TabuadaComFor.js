const readline = require('readline-sync') 

const tabuada = readline.questionInt("Qual a tabuada desejada? ")

for(let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    console.log(`${tabuada} x ${multiplicador} = ${tabuada*multiplicador}`);
}
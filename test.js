const rl = require("readline-sync");

let positiveCount = 0;
let negativeCount = 0;
let totalCount = 0;

while (true) {
    const input = rl.question("Digite um número (ou 0 para parar): ");
    const number = parseInt(input);

    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("Por favor, digite um número válido.");
        continue; // Skip the rest of the loop iteration
    }

    // Check if the user wants to stop
    if (number === 0) {
        break; // Exit the loop
    }

    // Increment counts based on the input number
    totalCount++;
    if (number > 0) {
        positiveCount++;
    } else {
        negativeCount++;
    }
}

// Output the results
console.log(`Quantidade de números positivos: ${positiveCount}`);
console.log(`Quantidade de números negativos: ${negativeCount}`);
console.log(`Quantidade total de números informados: ${totalCount}`);

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");
frutas.unshift("melão");
console.log(frutas, frutas.length);
console.log(frutas[3]);
//delete frutas[3];
frutas[3] = null;
console.log(frutas, frutas.length);
console.log(frutas[3]);
// Length - Tamanho / Quantidade de elementos
// Push - Incluir no fim do Array
// Unshift - Incluir no começo do Array
// Pop - Remove o último elemento do Array
// Shift - Remove o primeiro elemento do Array

let lancamentos = [84.77,-22.18,{"valor": 333, "tipo": "debito"}]



//---------------------------------------------------------


const numeros = [1, 2, 3, 4, 5];

// Dobrar cada número
// Arrow Functions  
const numerosDobrados = numeros.map(numero => numero * 2);

// Funções Naturais
const numerosDobradosNaturais = numeros.map(function (numero) {
    return numero * 2;
});

const frutas = ["maça", "banana", "uva"];
console.log(frutas);
for (let indice = 0; indice < frutas.length; indice++) {
    console.log('Indice', indice);
    console.log('Valor', frutas[indice]);
}
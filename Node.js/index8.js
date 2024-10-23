// reduce = Reduzir o conteúdo para um único valor.
const listaNumeros = [1,2,3];
let resultadoReduce2 = listaNumeros.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
console.log('resultadoReduce2', resultadoReduce2);

const listaNomes = ["João", "Maria", "José"];
console.log(listaNomes.reduce( (nomes, nomeAtual) => `${nomes}, ${nomeAtual}`, ""));

// join = Juntas as partes de um Array, utilizando uma "cola"
console.log(listaNomes.join(", "));

// map = Transformar como cada item será exibido.
console.log(listaNumeros, listaNumeros.map(n => n * n));
const listaObjetos = [
    { id: 1, nome: "Júlio", sobrenome: 'Silva' },
    { id: 2, nome: "Martina", sobrenome: 'Pereira' },
    { id: 3, nome: "José", sobrenome: 'Antonio' }
];

console.log(listaObjetos, listaObjetos.map(pessoa => `${pessoa.id} - ${pessoa.nome} ${pessoa.sobrenome}`));

const listaDadosExcel = [
    [4, "Flávio", "Fúvio"],
    [5, "Flávia", "Doreira"],
    [6, "Donatelo", "De Silva"],
]

console.log(listaDadosExcel, listaDadosExcel.map(pessoa => {
    return {
        "id": pessoa[0],
        "nome": pessoa[1],
        "sobrenome": pessoa[2]
    }
}));

// filter = Filtrar baseado em uma condição
const listaNumerais = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

console.log('Filter Pares', listaNumerais.filter( n => n % 2 == 0));
console.log('Filter Ímpares', listaNumerais.filter( n => n % 2 != 0));


// forEach = Percorrer cada um dos elementos do nosso array. [ for = Para | each = Cada]
listaNumerais.forEach( (num, posicao) => {
    console.log(`${posicao} --- num ${num}`);
});
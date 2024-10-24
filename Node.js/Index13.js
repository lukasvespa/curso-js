// jeduce = Reduzir o conteúdo para um único valor.
const listaNumeros = [1,2,3];
let resultadoReduce2 = listaNumeros.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
console.log('resultadoReduce2', resultadoReduce2);

const listaNomes = ["João", "Maria", "José"];
console.log(listaNomes.reduce( (nomes, nomeAtual) => `${nomes}, ${nomeAtual}`, ""));

// join = Juntas as partes de um Array, utilizando uma "cola"
console.log(listaNomes.join(", "));
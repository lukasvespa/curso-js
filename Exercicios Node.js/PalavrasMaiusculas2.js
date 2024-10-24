const palavras = ["bola", "tênis", "carro", "celular", "computador"];
const transformarEmMaiusculo = palavra => palavra.toUpperCase();
const palavrasMaiusculas = palavras.map(transformarEmMaiusculo);
//const palavrasMaiusculas = palavras.map(palavra => palavra.toUpperCase() );

console.log(palavrasMaiusculas);
const readline = require("readline-sync");

const sexo = readline.question("Qual seu sexo? M ou F: ");

//toUpperCase = Transforma a letra em maiúscula
//toLowerCase = Transforma a letra em minúscula
if (sexo.toLowerCase() == "m") {
    console.log("Pode entrar no banheiro masculino");
} else if (sexo.toLowerCase() == "f") {
    console.log("Não pode entrar no banheiro masculino");
} else {
    console.log("Opção desconhecida");
}
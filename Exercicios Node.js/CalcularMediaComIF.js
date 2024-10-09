/**
 *    ==    - Operador lógico de comparação
 *    >     - Operador lógico maior que
 *    >=    - Operador lógico maior ou igual à
 *    <     - Operador lógico menor que
 *    <=    - Operador lógico menor ou igual à
 *    !=    - Operador lógico diferente de
 * 
 *   condição operador valor
 *   sexo == "M"
 *   idade >= 18
 *   senha == novaSenha
 */

/** 
 * Solicitar o nome do aluno, as 4 notas dele no ano, calcular a média final. 
 * Se a média for maior ou igual 6, exibir "O aluno <nome> foi aprovado com a média <media>".
 * Senão, exibir "O aluno <nome> foi reprovado com a média <media>".
*/

const readline = require('readline-sync')

const nome = readline.question("Qual o seu nome? ")
const nota1 = readline.questionFloat("Qual a sua nota no Primeiro Bimestre? ")
const nota2 = readline.questionFloat("Qual a sua nota no Segundo Bimestre? ")
const nota3 = readline.questionFloat("Qual a sua nota no Terceiro Bimestre? ")
const nota4 = readline.questionFloat("Qual a sua nota no Quarto Bimestre? ")
const notas = nota1 + nota2 + nota3 + nota4
const media = notas / 4

if (media >= 6) { //toFixed(2) = faz com que mostre a média com somente duas casas decimais
    console.log(`O aluno ${nome} foi APROVADO com a média de ${media.toFixed(2)}`)
} else {
    console.log(`O aluno ${nome} foi REPROVADO com a média de ${media.toFixed(2)}`)
}
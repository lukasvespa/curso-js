const rl = require("readline-sync")

//1 - Faça um programa que leia um número e identifique se ele é PAR ou Ímpar.

const num = rl.questionInt("Insira um numero: ")

if (num % 2 == 0){
    console.log(`o numero ${num} e par`)
} else {
    console.log(`o numero ${num} e impar`)
}
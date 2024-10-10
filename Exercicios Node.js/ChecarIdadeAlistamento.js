/** 
 * Solicitar a idade e o sexo da pessoa. OK
 * Se for maior ou igual a 18 anos, verificar se é do sexo masculino. OK
 * Se for do sexo masculino, informar "Bem-vindo ao exército brasileiro"; OK
 * Se for do sexo feminino, perguntar "Desejar se alistar ao exército? ".
 * Se sim, informar "Bem-vindo ao exército brasileiro".
 * Se não, informar "Obrigado."
*/

const readline = require('readline-sync')

const idade = readline.questionInt("Qual a sua idade? ")
const sexo = readline.question ("Qual o seu sexo? Masculino ou Feminino (M/F) \n")

if (idade >= 18) { 
    if (sexo.toUpperCase() == "M") {
        console.log("Bem-vindo ao exército Brasileiro!")
} else if (sexo.toUpperCase() == "F") {
        const opcao = readline.question("Gostaria de se Juntar ao exercito Brasileiro? (S/N) \n")
        if (opcao.toUpperCase() == "S") {
            console.log("Bem-vinda ao exército brasileiro!")
    } else { 
        console.log("Obrigado!")
    }
}
} else {
    console.log ("Você ainda não possui a idade necessária para se alistar!")
} 


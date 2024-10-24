/***
 * Transformem a lista abaixo para o seguinte modelo:
 * 
 * 
 * [ ] - Item Feito // item.status = False
 * [x] - Item Não Feito // item.status = True
 */

const items = [
    {id: 1, descricao: "Arrumar a Casa", status: true},
    {id: 2, descricao: "Arrumar o Escritório", status: true},
    {id: 3, descricao: "Levar a Filó no PetShop", status: false},
    {id: 4, descricao: "Tirar o lixo", status: false},
    {id: 5, descricao: "Fazer as compras", status: true},
]

items.forEach(item => {
    if (item.status == true) {
        console.log(`[x] ${item.descricao}`);
    } else {
        console.log(`[ ] ${item.descricao}`);
    }
});
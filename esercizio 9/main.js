// Esercizio 9
//dato menù di una pizzeria,
// genera dinamicamente una lista HTML che mostri nome e prezzo di ogni pizza

const products = [
    {
        nome: "Margherita",
        prezzo: 6
    },
    {
        nome: "Prosciutto e funghi",
        prezzo: 7
    },
    {
        nome: "Diavola",
        prezzo: 8
    },
    {
        nome: "Marinara",
        prezzo: 6
    },
    {
        nome: "Tonno e cipolla",
        prezzo: 7
    },
]

const userList = document.querySelector(".list-group");

products.forEach(product => {
    console.log(product);

    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = product.nome;
    userList.appendChild(listItem)
});
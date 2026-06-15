// Esercizio 4
//dato un oggetto utente (nome, ruolo, img) e una struttura HTML vuota,
// inserisci i dati dell'oggetto nei rispettivi elementi della pagina
const card = document.querySelector("#myCard");

// const imgCard = card.querySelector("img");
// imgCard.src = person.picture;

card.querySelector("img").src = person.picture;
card.querySelector(".card-title").textContent = person.nome;
card.querySelector(".card-title").textContent = person.role;
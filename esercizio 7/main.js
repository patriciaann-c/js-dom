// Esercizio 7
// dato un oggetto prodotto con una quantità,
// mostra un badge del colore appropriato e con una descrizione appropriata

const product = {
    nome: "Mouse Wireless",
    quantity: 3
};

const badge = document.getElementById("stock-badge");

function updateStockBadge(product) {
    if (product.quantity === 0) {
        badge.textContent = "Esaurito";
        badge.style.backgroundColor = "red";
    } else if (product.quantity <= 5) {
        badge.textContent = "Scorte limitate";
        badge.style.backgroundColor = "orange";
    } else {
        badge.textContent = "Disponibile";
        badge.style.backgroundColor = "green";
    }

    badge.style.color = "white";
    badge.style.padding = "4px 8px";
    badge.style.borderRadius = "4px";
}

updateStockBadge(product);
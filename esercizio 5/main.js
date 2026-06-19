// Esercizio 5
// dato un prezzo fisso e un input per la quantità,
// aggiorna in tempo reale un paragrafo che mostra il totale

const price = 10;

const quantityInput = document.getElementById("quantity");
const totalParagraph = document.getElementById("total");

function updateTotal() {
    const quantity = Number(quantityInput.value) || 0;
    const total = price * quantity;

    totalParagraph.textContent = `Totale: €${total.toFixed(2)}`;
}

quantityInput.addEventListener("input", updateTotal);


updateTotal();
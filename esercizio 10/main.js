// Esercizio 10
// data una lista di contatti telefonici, genera una lista HTML.
// Al click su un elemento, mostra il numero di telefono corrispondente tramite un alert

const contacts = [
    { name: "Mario Rossi", phone: "3331234567" },
    { name: "Giulia Bianchi", phone: "3479876543" },
    { name: "Luca Verdi", phone: "3205554444" }
];

const list = document.getElementById("contacts-list");

contacts.forEach(contact => {
    const li = document.createElement("li");

    li.textContent = contact.name;

    li.addEventListener("click", () => {
        alert(`Numero di ${contact.name}: ${contact.phone}`);
    });

    list.appendChild(li);
});
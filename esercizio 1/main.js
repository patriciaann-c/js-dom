// Esercizio 1
//crea un input e un paragrafo.
// Mentre l'utente digita nell'input, il testo del paragrafo si aggiorna in tempo reale
const userInput = document.querySelector("#userInput");
const userOutput = document.querySelector("#userOutput");

userInput.addEventListener("input", () => {

    if (!userInput.value.length) {
        userOutput.textContent = "NON HAI SCRITTO NULLA";
    } else {
        userOutput.textContent = "Il testo scritto dall'utente é " + userInput.value;
    }
})





// Esercizio 1
const userInput = document.querySelector("#userInput");
const userOutput = document.querySelector("#userOutput");

userInput.addEventListener("input", () => {

    if (!userInput.value.length) {
        userOutput.textContent = "NON HAI SCRITTO NULLA";
    } else {
        userOutput.textContent = "Il testo scritto dall'utente é " + userInput.value;
    }
})
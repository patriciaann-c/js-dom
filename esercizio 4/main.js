// Esercizio 4
// con due input password, mostra un messaggio di errore rosso
// se i valori non coincidono mentre l'utente digita nel secondo campo

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const error = document.getElementById("error");

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value === "") {
        error.style.display = "none";
    } else if (password.value !== confirmPassword.value) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});
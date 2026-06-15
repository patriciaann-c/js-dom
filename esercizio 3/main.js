// ESercizio 3
//crea un input e un pulsante disabilitato.
// Abilita il pulsante solo quando l'input contiene almeno 3 caratteri

const button = document.querySelector('button');
const text = document.querySelector('#inputPassword2');

text.addEventListener("input", () => {
    if (text.value.lengnth >= 3) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", true);
    }
})
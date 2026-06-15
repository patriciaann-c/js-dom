// Esercizio 2
//crea un pulsante accanto ad un input password.
//Al click, cambia il tipo dell'input da password a text e viceversa

const input = document.querySelector("#inputPassword2");
const button = document.querySelector('[type="submit"]');

button.addEventListener('click', () => {

    const inputType = input.getAttribute("type");

    if (inputType === "password") {
        input.setAttribute("type", "text");
        button.textContent = "Nascondi password";
        // button.classList.add("bg-success");
    } else {
        input.setAttribute("type", "password");
        button.textContent = "Mostra password";
        //button.classList.remove("bg-success");
        //button.classList.add("bg-danger");
    }
})
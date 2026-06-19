// Esercizio 8
// data una lista di colori, genera in pagina una serie di box, ognuno con il suo colore

const colors = ["red", "green", "blue", "orange", "purple"];

container.innerHTML = colors
    .map(color => `
    <div
      style="
        width:100px;
        height:100px;
        background:${color};
        border:1px solid #ccc;
      "
    ></div>
  `)
    .join("");
let choixc = prompt("choisissez une couleur de texte en anglais");
let choixf = prompt("choisissez une couleur de fond en anglais");
choixc=choixc.toLocaleLowerCase();
choixf=choixf.toLocaleLowerCase();
const div = document.querySelectorAll("div");
// for (let i = 0; i < div.length; i++) {
//     const compte = div[i];
//     compte.style.color = choixc;
//     compte.style.backgroundColor = choixf;
// }
div.forEach(divelement => {
    divelement.style.color = choixc;
    divelement.style.backgroundColor = choixf;
});
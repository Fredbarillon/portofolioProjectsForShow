// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];
const danstaliste = document.createElement("dl");


mots.forEach(element  => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = element.terme;
    dd.textContent = element.definition;
    danstaliste.appendChild(dt);
    danstaliste.appendChild(dd);
});
document.getElementById("contenu").appendChild(danstaliste);
// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
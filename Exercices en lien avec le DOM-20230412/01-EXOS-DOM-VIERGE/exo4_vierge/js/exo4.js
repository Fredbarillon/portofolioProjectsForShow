const paragraphe = document.createElement("p");
document.getElementById("contenu").appendChild(paragraphe);
const texte1 =document.createTextNode("En voici une ");
const link = document.createElement("a");
link.setAttribute('href', 'https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation');
link.setAttribute('target', '_blank');
link.innerHTML = 'liste';
const texte2 = document.createTextNode(" plus complete");
paragraphe.append(texte1, link, texte2);

// let contenu =document.getElementById("contenu");
// contenu.insertAdjacentHTML("beforeend",
// '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation">liste</a> plus complète.</p>');
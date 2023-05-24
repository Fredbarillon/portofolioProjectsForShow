/*
 Exercice : afficher l'enfant d'un objet du DOM
*/


// Doit afficher le noeud h1
let numeroEnfant = 1;
afficherEnfant(document.body, numeroEnfant);


afficherEnfant(document.body.children[2].children[0], 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.head, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 1);






// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
    let affiche = noeud.children;
    
    if ( affiche == undefined ||indice < 1 || affiche.length < indice){
        let message = affiche == undefined ? "Type de noeud incorrect" : "Indice incorrect";
        console.log(message)
    }
    else {
        console.log(affiche[indice - 1].nodeName);
    }
    
    // votre code ...
}
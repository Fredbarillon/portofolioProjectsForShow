function infosLiens() {
    const node = document.getElementsByTagName("a");
    if (node.firstChild = true) {
        console.log(node[0] +" premier lien")
    }
    if (node.lastChild= true) {
        console.log(node[node.length-1] + " dernier lien")
    }
    console.log(node.length)
}

function possede(_id, _class) {
    const element = document.getElementById(_id);
  let message;
    if (!element) {
      message ="erreur";
    }
    else {
      message=element.classList.contains(_class);
  }
  return message;
  }
  

infosLiens();

console.log(possede("saxophone", "bois")); // Doit afficher true
console.log(possede("saxophone", "cuivre")); // Doit afficher false
console.log(possede("trompette", "cuivre")); // Doit afficher true
console.log(possede("contrebasse", "cordes")); // Doit afficher une erreur



// First, the function takes two parameters: _id and _class, which represent the ID and class we want to check for.
// Then, we use document.getElementById(_id) to get the element with the given ID.
//  If the element doesn't exist, we immediately return the string "erreur".
// If the element does exist, we use the classList property to check if it contains 
// the given class _class. If it does, we return true, otherwise we return false.

//So, in summary, the possede() function takes an ID and class, checks if the element with that ID exists,
//  and returns true or false depending on whether that element has the given class or not.If the ID doesn't exist, it returns an error message

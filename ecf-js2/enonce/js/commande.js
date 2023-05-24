 // URLSearchParams()
const requestString = window.location.search.substring(1);
const request = new URLSearchParams(requestString);
 
 // creation of a Personne
 import { Personne } from "/enonce/js/classes/Personne.js";
const personne = new Personne(request.get('nom'), request.get('prenom'), request.get('courriel'),
request.get('adresse'),request.get('ville'),request.get('codePostal'));

// test
// console.log(personne);
// displaying the Personne in commande.html
let sirName = document.getElementById("nom");
sirName.innerText = personne.getsirName();
let fName = document.getElementById("prenom");
fName.innerText = personne.getfName();
let email = document.getElementById("courriel");
// in case it is needed 
email.innerText = personne.getEmail();
email.style.display = "none";
let address = document.getElementById("adresse");
address.innerText = personne.getAddress();
let city = document.getElementById("ville");
city.innerText = personne.getCity();
let postCode = document.getElementById("codepostal");
postCode.innerText = personne.getPostCode();


const listeLivre = [
    {
        ref: '',
        nom: 'Choisir un livre',
        prix: ''
    },
    {
        ref: 'lol01',
        nom: 'Le grand livre de JavaScript',
        prix: '15'
    },
    {
        ref: 'lol02',
        nom: 'HTML encore plus vite',
        prix: '20'
    },
    {
        ref: 'lol03',
        nom: 'Windows NT',
        prix: '25'
    },
    {
        ref: 'lol04',
        nom: 'Le kit de Ressource technique de NT',
        prix: '30'
    },
    {
        ref: 'lol05',
        nom: 'Formation Java',
        prix: '35'
    },
    {
        ref: 'lol06',
        nom: 'Comment créer son site web',
        prix: '40'
    }
]
// test
// console.log(listeLivre[0].nom);

// displaying the select and the correpsonding fields (price and reference)
let selectField = document.getElementById("designation1");
let reference = document.getElementsByName("ref1")[0];
let price = document.getElementsByName("prixUnitaire1")[0];
let selectField2 = document.getElementById("designation2");
let reference2 = document.getElementsByName("ref2")[0];
let price2 = document.getElementsByName("prixUnitaire2")[0];
let quantity1 = document.getElementsByName("quantite1")[0];
let quantity2 = document.getElementsByName("quantite2")[0];
let priceToPay1 = document.getElementsByName("prix1")[0];
let priceToPay2 = document.getElementsByName("prix2")[0];
let total = document.getElementById("total");
// console.log(quantity1.value);
// implement the option tags
listeLivre.forEach((element,key)=>{
    selectField[key] = new Option(element.nom, key);
    selectField2[key] = new Option(element.nom, key);
})
// upon choosing an option, display the right price and reference
selectField.addEventListener("change", () => {
    const selectedOption = selectField.options[selectField.selectedIndex];
    const selectedIndex = selectedOption.value;
    reference.value = listeLivre[selectedIndex].ref;
    price.value = listeLivre[selectedIndex].prix;
    quantity1.value = "";
    priceToPay1.value = "";
})

selectField2.addEventListener("change", () => {
    const selectedOption2 = selectField2.options[selectField2.selectedIndex];
    const selectedIndex2 = selectedOption2.value;
    reference2.value = listeLivre[selectedIndex2].ref;
    price2.value = listeLivre[selectedIndex2].prix;
    quantity2.value, priceToPay2.value = "";
})

// calculate price +total price

quantity1.addEventListener("input", () => {
        priceToPay1.value = quantity1.value * price.value;
        updateTotal();
})

quantity2.addEventListener("input", () => {
    priceToPay2.value = quantity2.value * price2.value;
    updateTotal();
});


function updateTotal() {
    const price1 = parseFloat(priceToPay1.value) || 0;
    const price2 = parseFloat(priceToPay2.value) || 0;
    const totalPrice = price1 + price2;
    total.value = totalPrice.toFixed(2); 
  }



// delete action (I know it could be shortened with a common function for both delete button but don't have the time to do it or it will take 2 weeks to finish)
let delete1 = document.getElementById("sup1");
let delete2 = document.getElementById("sup2");
delete1.addEventListener("click",() => {
    selectField.selectedIndex = 0;
    reference.value= "";
    quantity1.value= "";
    priceToPay1.value= "";
    price.value = "";

})
delete2.addEventListener("click",() => {
    selectField2.selectedIndex = 0;
    reference2.value = "";
    quantity2.value = "";
    priceToPay2.value = "";
    price2.value = "";
})


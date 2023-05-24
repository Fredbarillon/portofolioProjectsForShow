console.log("ok ecf");
import { Photo } from "./classes/Photo.js";
import { Client } from "./classes/Client.js";
import { Message } from "./classes/Message.js";
//récupération des éléments du html
let btnValid = document.getElementById("valid");
let messageEr = document.getElementById("messageError");
let message = document.getElementById("message");
let nomEr = document.getElementById("nomError");
let nom = document.getElementById("nom");
let prenomEr = document.getElementById("prenomError");
let prenom = document.getElementById("prenom");
let courrielEr = document.getElementById("courrielError");
let courriel = document.getElementById("courriel");
let selectPhoto = document.getElementById("selectPhoto");
let selectedType = document.getElementById("selectType");
let selectEr = document.getElementById("selectError");
let imgPh = document.getElementById("image");
let photoError = document.getElementById("photoError");
let reset = document.getElementById("btnReset");
let textElements = ["Votre demande concerne",
    "Information articles",
    "Commande & paiement",
    "Expédition & livraison",
    "Retour, échange & remboursement",
    "Code promo & Bon d'achat",
    "Newsletters",
    "Problème technique",
    "Autres demandes",
    "Protection des données personnelles"];


/**  insert options for type
 
*/
textElements.forEach((element,index) => {
    let options = document.createElement("option");
    options.value = index;
    options.innerText = element;
    selectedType.appendChild(options);
})
selectedType.addEventListener("change", () => {
    verifThings(selectedType,selectEr,"Veuillez choisir une demande.")
})

// verification select elements
const verifThings = (selectValue, selectError, innerTextmessage) => {
    if (selectValue.value ==0) {
        selectError.innerText = innerTextmessage;
        selectError.style.color = "red";
        return false
    } else {
        selectError.innerText = ""
        return true
    }
}
// photos
let photoList =["Choisir photo", "alain", "albert","alfred","alphonse","berth","elisabeth","gertrude","gilbert","hugh","jacques","john",]
photoList.forEach((element,index)=> {
    if (index===0) {
        photoList[index]= new Photo(element,"photos/neutre.jpg")
    } else {
        photoList[index] = new Photo(element, "photos/" + element + ".jpg");
        console.log(photoList[index]);
    }
        
    let options = document.createElement("option");
    options.value = index;
   options.innerText = element;
   selectPhoto.appendChild(options);
 
})
selectPhoto.addEventListener("change", () => {
//    console.log(selectPhoto.value);
    imgPh.src = photoList[selectPhoto.value].getSource(); 
    verifThings(selectPhoto, photoError, "Veuillez choisir une photo");
})

// rafraichir
reset.addEventListener("click",() => {
    const erMessage = document.querySelectorAll("form > div");
    erMessage.forEach(element => {
        element.innerText=""
    })
    const erBorder = document.querySelectorAll("form > input, form > textarea");
    erBorder.forEach(element => {
        element.style.border = "1px solid grey";
    })
    imgPh.src = "photos/neutre.jpg";
})

    
    // 3character required by field with rejex
    let regMessage = /^[\w\s.,?!@#$%^&*()\-+={}[\]\\\|;:'"<>,/]{3,}$/;
    let regAutre = /^[\w.\-,^'¨ ]{3,}$/ ;
    let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validInput2 = (regex, validate, error, message)=>{
    if (!regex.test(validate.value)) {
        error.innerText =message;
        error.style.color = "red";
        validate.style.border = "1px solid red";
        return false
    } else {
        error.innerText = "";
        validate.style.border = "1px solid gray";
    return true
    }
}

nom.addEventListener('blur', () => {
    validInput2(regAutre,nom, nomEr, "ERROR : le nom doit contenir trois caractères minimum.");
})
message.addEventListener('blur', () => {
    validInput2(regMessage, message, messageEr, "ERROR : le message doit contenir trois caractères minimum.");
})
prenom.addEventListener('blur', () => {
    validInput2(regAutre,  prenom, prenomEr, "ERROR : le prénom doit contenir trois caractères minimum.");
})
courriel.addEventListener('blur', () => {
    validInput2(regEmail, courriel, courrielEr, "Email non valide.");
})





// bouton envoyer
btnValid.addEventListener('click', (event) => {
    event.preventDefault();
        if (validInput2(regMessage,message, messageEr, "ERROR : le message doit contenir 3 caractères minimum") &&
        validInput2(regAutre,prenom, prenomEr, "ERROR : prénom non valide" ) &&
        validInput2(regAutre,nom, nomEr, "ERROR : nom non valide") &&
        validInput2(regEmail,courriel, courrielEr, "ERROR : email non valide") &&
        verifThings(selectPhoto, photoError, "Veuillez choisir une photo") &&
        verifThings(selectedType,selectEr,"Veuillez choisir une demande.")   
    ) {
            let client = new Client(nom.value, prenom.value, courriel.value, photoList[parseInt(selectPhoto.value)]);
            console.log(client);
            let logMessage = new Message(selectedType.value, message.value, client);
            console.log(logMessage)
        } else {
            alert("Tous les champs ne sont pas remplis.");
    }
})













console.log('ok');
// variable catching the inputs
let sirName = document.getElementById("nom");
let fName = document.getElementById("prenom");
let email = document.getElementById("courriel");
let adress = document.getElementById("adresse");
let city = document.getElementById("ville");
let postCode = document.getElementById("codePostal");
let surNameEr = document.getElementById("nomError");
let fNameEr = document.getElementById("prenomError");
let emailEr = document.getElementById("courrielError");
let adressEr = document.getElementById("adresseError");
let cityEr = document.getElementById("villeError");
let postCodeEr = document.getElementById("codePostalError");
let validBtn = document.getElementById("valid");

// regex
let regNPV = /^(?=.*[a-zA-Z])[a-zA-Z '-]+$/;
let regAdresse = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '"-]{3,}$/;
let regPostCode = /^\d{5,}$/;
let regEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

// testregex
// const test = "45555@gt.fr";
// const isValid = regEmail.test(test);
// console.log(isValid);

// input validation

const validInput = (regex, validate, error, message)=>{
    if (!regex.test(validate.value)) {
        error.innerText =message;
        error.style.color = "red";
        validate.style.boxShadow = "1px 1px 1px 1px red";
        return false
    } else {
        error.innerText = "";
        validate.style.boxShadow = "initial"
        return true
    }
}
let messageEr = "ERREUR: ";

sirName.addEventListener("blur", ()=> {
    validInput(regNPV, sirName, surNameEr, messageEr+"Nom invalide");
})
fName.addEventListener("blur", ()=> {
    validInput(regNPV, fName, fNameEr, messageEr+"Prénom invalide");
})
email.addEventListener("blur", ()=> {
    validInput(regEmail, email, emailEr, messageEr+ "Adresse email non valide");
})
adress.addEventListener("blur", ()=> {
    validInput(regAdresse, adress, adressEr, messageEr+ "Adresse invalide");
})
city.addEventListener("blur", ()=> {
    validInput(regNPV, city, cityEr, messageEr+"Ville invalide");
})
postCode.addEventListener("blur", ()=> {
    validInput(regPostCode, postCode, postCodeEr, messageEr+"Code postal invalide");
})

// evoyer button . check all required field are ok 
validBtn.addEventListener("click", (event)=> {
    // event.preventDefault();
    if (validInput(regNPV,sirName, surNameEr,messageEr) &&
    validInput(regNPV,fName, fNameEr,messageEr ) &&
    validInput(regEmail,email, emailEr, messageEr) &&
    validInput(regAdresse, adress, adressEr, messageEr) &&
    validInput(regNPV, city, cityEr, messageEr) &&
    validInput(regPostCode,postCode,postCodeEr,messageEr))
    {
        return true;
    } else {
        alert("Certains champs ne sont pas corrects ou non-remplis.")
        return false;
    }
    
})

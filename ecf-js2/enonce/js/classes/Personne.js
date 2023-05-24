
export class Personne {
    #sirName = "";
    #fName = "";
    #email = "";
    #address = ""
    #city = "";
    #postCode = 0;
    constructor(unNom, unPrenom, unEmail, uneAdresse, uneVille, unCodePostal) {   
        this.#sirName = unNom;
        this.#fName= unPrenom;
        this.#email = unEmail;
        this.#address = uneAdresse;
        this.#city = uneVille;
        this.#postCode = unCodePostal;
    }
    // getter
    getsirName() {
        return this.#sirName;
    }
    getfName() {
        return this.#fName
    }
    getEmail() {
        return this.#email
    }
    getAddress() {
        return this.#address
    }
    getCity() {
        return this.#city
    }
    getPostCode() {
        return this.#postCode
    }
}
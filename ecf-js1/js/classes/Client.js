
export class Client {
  #nom = "";
  #prenom = "";
  #courriel = "";
  #photo = ""
  constructor(unNom, unPrenom, unCourriel, unePhoto) {
    this.#nom = unNom;
    this.#prenom = unPrenom;
    this.#courriel = unCourriel;
    this.#photo = unePhoto;
  }
    
  // getter
    
  getNom() {
    return this.#nom;
  };
  getPrenom() {
    return this.#prenom;
  };
  getEmail() {
    return this.#courriel;
  };
  getPhoto() {
    return this.#photo;
  };
    
}
  
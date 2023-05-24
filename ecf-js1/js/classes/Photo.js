
export class Photo {
  #libelle;
  #source;
    constructor(unLibelle, uneSource) {
      this.setLibelle(unLibelle);
      this.setSource(uneSource);
    }

  
// getter
getLibelle() {
  return this.#libelle;
};

getSource() {
  return this.#source;
};

// // setter
setLibelle(unLibelle){
  this.#libelle = unLibelle;
  }
  setSource(uneSource) {
    this.#source = uneSource;
}
}


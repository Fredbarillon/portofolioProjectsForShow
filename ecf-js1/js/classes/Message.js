export class Message {
    #type;
    #message;
    #client;
    constructor(unType, unMessage, unClient) {
        this.#type = unType;
        this.#message = unMessage;
        this.#client = unClient;
    }

    // getter
    getType() {
        return this.#type;
    };
    getMessage() {
        return this.#message;
    };
    getClient() {
        return this.#client;
    };
}  




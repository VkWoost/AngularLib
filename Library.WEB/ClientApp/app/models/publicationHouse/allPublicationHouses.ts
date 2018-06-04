import { PublicationHouse } from "./publicationHouse";

export class AllPublicationHouses {
    constructor() {
        this.publicationHouses = new Array<PublicationHouse>();
    }
    public publicationHouses: PublicationHouse[];
}
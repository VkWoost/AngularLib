import { PublicationHouseGetView } from "./publicationHouseGetView";

export class AllPublicationHouses {
    constructor() {
        this.publicationHouses = new Array<PublicationHouseGetView>();
    }
    public publicationHouses: PublicationHouseGetView[];
}

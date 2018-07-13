import { GetPublicationHouseViewModel } from "./GetPublicationHouseViewModel";

export class GetAllPublicationHousesViewModel {
    constructor() {
        this.publicationHouses = new Array<GetPublicationHouseViewModel>();
    }
    public publicationHouses: GetPublicationHouseViewModel[];
}

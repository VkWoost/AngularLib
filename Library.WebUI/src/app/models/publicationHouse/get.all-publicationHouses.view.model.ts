import { GetPublicationHouseViewModel } from "./get.publicationHouse.view.model";

export class GetAllPublicationHousesViewModel {
    constructor() {
        this.publicationHouses = new Array<GetPublicationHouseViewModel>();
    }
    public publicationHouses: GetPublicationHouseViewModel[];
}

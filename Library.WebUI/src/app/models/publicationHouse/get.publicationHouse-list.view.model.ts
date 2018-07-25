import { GetPublicationHouseViewModel } from "./get.publicationHouse.view.model";

export class GetPublicationHouseListViewModel {
    constructor() {
        this.publicationHouses = new Array<GetPublicationHouseViewModel>();
    }
    public publicationHouses: Array<GetPublicationHouseViewModel>;
}

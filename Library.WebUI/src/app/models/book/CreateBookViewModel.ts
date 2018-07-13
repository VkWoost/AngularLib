import { GetAuthorViewModel } from "../author/GetAuthorViewModel";
import { GetPublicationHouseViewModel } from "../publicationHouse/GetPublicationHouseViewModel";

export class CreateBookViewModel {
    constructor(
        public id?: number,
        public name?: string,
        public yearOfPublication?: number,

        public author?: GetAuthorViewModel,
        public publicationHouses?: GetPublicationHouseViewModel[]) { }
}

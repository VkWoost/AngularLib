import { GetAuthorViewModel } from "../author/get.author.view.model";
import { GetPublicationHouseViewModel } from "../publicationHouse/get.publicationHouse.view.model";

export class CreateBookViewModel {
    constructor(
        public id?: number,
        public name?: string,
        public yearOfPublication?: number,

        public author?: GetAuthorViewModel,
        public publicationHouses?: GetPublicationHouseViewModel[]) { }
}

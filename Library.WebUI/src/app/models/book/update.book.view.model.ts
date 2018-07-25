import { GetAuthorViewModel } from "../author/get.author.view.model";
import { GetPublicationHouseViewModel } from "../publicationHouse/get.publicationHouse.view.model";

export class UpdateBookViewModel {
    public id?: number;
    public name?: string;
    public yearOfPublication?: number;

    public author?: GetAuthorViewModel;
    public publicationHouses?: Array<GetPublicationHouseViewModel>;
}

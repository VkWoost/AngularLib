import { AuthorGetView } from "../author/authorGetView";
import { PublicationHouseGetView } from "../publicationHouse/publicationHouseGetView";

export class BookCreateView {
  constructor(
    public id?: number,
    public name?: string,
    public yearOfPublication?: number,

    public author?: AuthorGetView,
    public publicationHouses?: PublicationHouseGetView[]) { }
}

import { GetAuthorViewModel } from "./GetAuthorViewModel";

export class GetAllAuthorsViewModel {
    constructor() {
        this.authors = new Array<GetAuthorViewModel>()
    }
    public authors: GetAuthorViewModel[];
}

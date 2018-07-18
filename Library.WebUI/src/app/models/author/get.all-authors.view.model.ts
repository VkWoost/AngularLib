import { GetAuthorViewModel } from "./get.author.view.model";

export class GetAllAuthorsViewModel {
    constructor() {
        this.authors = new Array<GetAuthorViewModel>()
    }
    public authors: GetAuthorViewModel[];
}

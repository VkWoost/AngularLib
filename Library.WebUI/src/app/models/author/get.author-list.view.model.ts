import { GetAuthorViewModel } from "./get.author.view.model";

export class GetAuthorListViewModel {
    constructor() {
        this.authors = new Array<GetAuthorViewModel>()
    }
    public authors: Array<GetAuthorViewModel>;
}

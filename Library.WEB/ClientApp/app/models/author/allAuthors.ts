import { Author } from "../author/author";

export class AllAuthors {
    constructor() {
        this.authors = new Array<Author>()
    }
    public authors: Author[];
}
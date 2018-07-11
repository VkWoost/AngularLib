import { AuthorGetView } from "./authorGetView";

export class AllAuthors {
    constructor() {
        this.authors = new Array<AuthorGetView>()
    }
    public authors: AuthorGetView[];
}

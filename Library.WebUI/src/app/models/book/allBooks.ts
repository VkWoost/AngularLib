import { BookGetView } from "./bookGetView";

export class AllBooks {
    constructor() {
        this.books = new Array<BookGetView>();
    }
  public books: BookGetView[];
}

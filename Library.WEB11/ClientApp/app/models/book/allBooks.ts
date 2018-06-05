import { Book } from "./book";

export class AllBooks {
    constructor() {
        this.books = new Array<Book>();
    }
    public books: Book[];
}
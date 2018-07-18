import { GetBookViewModel } from "./get.book.view.model";

export class GetAllBooksViewModel {
    constructor() {
        this.books = new Array<GetBookViewModel>();
    }
    public books: GetBookViewModel[];
}

import { GetBookViewModel } from "./get.book.view.model";

export class GetBookListViewModel {
    constructor() {
        this.books = new Array<GetBookViewModel>();
    }
    public books: GetBookViewModel[];
}

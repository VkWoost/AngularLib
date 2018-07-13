import { GetBookViewModel } from "./GetBookViewModel";

export class GetAllBooksViewModel {
    constructor() {
        this.books = new Array<GetBookViewModel>();
    }
    public books: GetBookViewModel[];
}

import { Author } from "../author/author";

export class Book {
    constructor(
        public id?: number,
        public name?: string,
        public yearOfPublication?: number,
        public authorId?: number,
        public author?: Author) { }
}
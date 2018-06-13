export class BookCreateView {
  constructor(
    public id?: number,
    public name?: string,
    public yearOfPublication?: number,

    public authorId?: number,
    public publicationHouseIds?: number[] ) { }
}

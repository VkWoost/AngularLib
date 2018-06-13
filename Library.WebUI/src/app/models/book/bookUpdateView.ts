export class BookUpdateView {
  constructor(
    public id?: number,
    public name?: string,
    public yearOfPublication?: number,

    public authorId?: number,
    public publicationHouseIds?: number[]  ) { }
}

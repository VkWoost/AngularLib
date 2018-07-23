import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetBookListViewModel } from '../models/book/get.book-list.view.model';
import { CreateBookViewModel } from '../models/book/create.book.view.model';
import { UpdateBookViewModel } from '../models/book/update.book.view.model';

@Injectable()
export class BookService {

    private url: string = "/api/Book";

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get<GetBookListViewModel>(this.url);
    }

    public create(item: CreateBookViewModel) {
        return this.http.post(this.url, item)
    }

    public update(item: UpdateBookViewModel) {
        return this.http.put(this.url, item)
    }

    public delete(id?: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}

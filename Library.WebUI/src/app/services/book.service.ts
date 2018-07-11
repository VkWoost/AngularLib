import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllBooks } from '../models/book/allBooks';
import { BookCreateView } from '../models/book/bookCreateView';
import { BookUpdateView } from '../models/book/bookUpdateView';

@Injectable()
export class BookService {

    private url: string = "/api/Book";

    constructor(private http: HttpClient) { }

    public get() {
        return this.http.get<AllBooks>(this.url);
    }
    public create(item: BookCreateView) {
        return this.http.post(this.url, item)
    }
    public update(item: BookUpdateView) {
        return this.http.put(this.url, item)
    }
    public delete(id?: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}

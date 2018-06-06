import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book/book';


@Injectable()
export class DataService {

    private url = "";

    constructor(private http: HttpClient) {
        this.url = "api/Book";
    }

    getProducts() {
        return this.http.get(this.url);
    }

    getProduct(id: number) {
        return this.http.get(this.url + 'api/Book/Get/' + id);
    }

    createProduct(product: Book) {
        return this.http.post(this.url + 'api/Book/Create', product);
    }
    updateProduct(product: Book) {
        return this.http.put(this.url + 'api/Book/Update', product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/Book/Delete/' + id);
    }
}

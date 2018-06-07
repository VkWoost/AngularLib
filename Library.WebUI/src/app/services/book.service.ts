import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book/book';
import { AllBooks } from '../models/book/allBooks';

@Injectable()
export class DataService {

    private url = "";

    constructor(private http: HttpClient) {
        this.url = "api/Book/";
    }

    getProducts() {
        return this.http.get<AllBooks>(this.url);
    }

    getProduct(id: number) {
        return this.http.get(this.url + '/Get/' + id);
    }

    createProduct(product: Book) {
        return this.http.post(this.url, product);
    }
    updateProduct(product: Book) {
        return this.http.put(this.url, product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}

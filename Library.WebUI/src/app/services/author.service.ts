import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Author } from '../models/author/author';
import { AllAuthors } from '../models/author/allAuthors';

@Injectable()
export class DataService {

    private url = "/api/Author";

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<AllAuthors>(this.url);
    }

    getProduct(id: number) {
        return this.http.get(this.url + '/Get/' + id);
    }

    createProduct(product: Author) {
        return this.http.post(this.url, product);
    }
    updateProduct(product: Author) {
        return this.http.put(this.url, product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}

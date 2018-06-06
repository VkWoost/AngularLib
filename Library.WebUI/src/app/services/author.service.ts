import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Author } from '../models/author/author';

@Injectable()
export class DataService {

    private url = "/api/author";

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(this.url);
    }

    getProduct(id: number) {
        return this.http.get(this.url + 'api/Author/Get/' + id);
    }

    createProduct(product: Author) {
        return this.http.post(this.url + 'api/Author/Create', product);
    }
    updateProduct(product: Author) {
        return this.http.put(this.url + 'api/Author/Update', product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/Author/Delete/' + id);
    }
}

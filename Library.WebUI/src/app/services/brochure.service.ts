import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brochure } from '../models/brochure/brochure';


@Injectable()
export class DataService {

    private url = "/api/brochures";

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(this.url + 'api/Brochure/GetAll');
    }

    getProduct(id: number) {
        return this.http.get(this.url + 'api/Brochure/Get/' + id);
    }

    createProduct(product: Brochure) {
        return this.http.post(this.url + 'api/Brochure/Create', product);
    }
    updateProduct(product: Brochure) {
        return this.http.put(this.url + 'api/Brochure/Update', product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/Brochure/Delete/' + id);
    }
}

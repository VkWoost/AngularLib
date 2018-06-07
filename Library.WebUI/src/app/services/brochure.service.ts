import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brochure } from '../models/brochure/brochure';
import { AllBrochures } from '../models/brochure/allBrochures';

@Injectable()
export class DataService {

    private url: string = "/api/Brochure";

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<AllBrochures>(this.url);
    }

    getProduct(id: number) {
        return this.http.get(this.url + '/Get/' + id);
    }

    createProduct(product: Brochure) {
        return this.http.post(this.url, product);
    }
    updateProduct(product: Brochure) {
        return this.http.put(this.url, product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}

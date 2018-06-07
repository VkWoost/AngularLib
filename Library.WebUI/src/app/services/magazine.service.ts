import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Magazine } from '../models/magazine/magazine';
import { AllMagazines } from '../models/magazine/allMagazines';

@Injectable()
export class DataService {
         
    private url: string = "/api/Magazine";

    constructor(private http: HttpClient) {
    }
    
    getProducts() {
        return this.http.get<AllMagazines>(this.url);
    }
    getProduct(id: number) {
        return this.http.get(this.url + '/Get/' + id);
    }
    createProduct(product: Magazine) {
        return this.http.post(this.url, product);
    }
    updateProduct(product: Magazine) {
        return this.http.put(this.url, product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}

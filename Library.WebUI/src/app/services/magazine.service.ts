import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Magazine } from '../models/magazine/magazine';

@Injectable()
export class DataService {
         
    private url = "/api/magazine";

    constructor(private http: HttpClient) {
    }
    
    getProducts() {
        return this.http.get(/*this.url + */'/api/magazine/GetAll');
    }
    getProduct(id: number) {
        return this.http.get(this.url + 'api/Magazine/Get/' + id);
    }
    createProduct(product: Magazine) {
        return this.http.post(this.url + 'api/Magazine/Create', product);
    }
    updateProduct(product: Magazine) {
        return this.http.put(this.url + 'api/Magazine/Update', product);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + 'api/Magazine/Delete/' + id);
    }
}
